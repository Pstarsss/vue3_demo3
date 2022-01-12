<template>
  <div class="">
    <a-layout>
      <a-layout-header class="px-header">
        <span class="px-header-title">消灭星星的肚子</span>
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
    </a-layout>
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-sub-menu
            v-for="{ name: subName, meta, children } in sideRouters"
            :key="subName"
          >
            <template #title v-if="meta">
              <component :is="meta.icon" v-if="meta.icon" />
              <span v-if="meta.navTitle">{{ meta.navTitle }}</span>
            </template>

            <template v-if="children && children.length">
              <a-menu-item
                v-for="{ name: childName, path, meta: childMeta } in children"
                :key="childName"
              >
                <router-link :to="{ path }">
                  <component :is="childMeta.icon" v-if="childMeta.icon" />
                  {{ childMeta.navTitle }}
                </router-link>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-content class="margin-16-leftRight">
          <a-breadcrumb class="margin-16-topBottom">
            <a-breadcrumb-item
              v-for="{ name, meta: { navTitle } } in $route.matched"
              :key="name"
            >
              {{ navTitle }}
            </a-breadcrumb-item>
          </a-breadcrumb>
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";

import routers from "../../route/routes/index";

export default defineComponent({
  name: "PxLayout",

  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },

  setup() {
    let sideRouters = computed(function getSiderRoutes() {
      return filterRoutes(routers).filter(
        ({ subRoutes }) => subRoutes && subRoutes.length
      );
    });

    function filterRoutes(routes) {
      return routes.filter((route) => {
        const {
          meta: { hideInSider, navTitle },
          children,
        } = route;
        const showSider = !hideInSider && navTitle;
        if (showSider && children) {
          route.subRoutes = filterRoutes(children);
          return !!route.subRoutes.length;
        }

        return showSider;
      });
    }

    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(["1"]),
      sideRouters,

      filterRoutes,
    };
  },
});
</script>

<style scoped lang="less">
@import "~@/common/style/common.less";

.px-header {
  background: #fff;
  padding: 0;

  .px-header-title {
    padding-left: 30px;

    font-family: @my-font;
    font-size: @header-font-size;
    font-weight: bold;
    line-height: 30px;
    color: @layout-header-title;
  }

  .trigger {
    font-size: 22px;
    margin-left: 10px;
  }
}

#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.layout-content {
  padding: 24px;
  background: #fff;
  min-height: 360px;
}

.margin-16-leftRight {
  margin: 0 16px;
}

.margin-16-topBottom {
  margin: 16px 0;
}
</style>
