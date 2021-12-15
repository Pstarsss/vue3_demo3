<template>
    <div class="">
        <a-layout>
            <a-layout-header class="px-header">
                <div>消灭星星的肚子</div>

                <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
                <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </a-layout-header>
        </a-layout>
        <a-layout style="min-height: 100vh">
            <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible >
                <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                    <a-menu-item key="1">
                        <pie-chart-outlined />
                        <span>Option 1</span>
                    </a-menu-item>

                    <a-menu-item key="2">
                        <desktop-outlined />
                        <span>Option 2</span>
                    </a-menu-item>

                    <a-sub-menu key="sub1">
                        <template #title>
                            <span>
                                <user-outlined />
                                <span>User</span>
                            </span>
                        </template>
                        <a-menu-item key="3">Tom</a-menu-item>
                        <a-menu-item key="4">Bill</a-menu-item>
                        <a-menu-item key="5">Alex</a-menu-item>
                    </a-sub-menu>

                    <a-sub-menu key="sub2">
                        <template #title>
                            <span>
                            <team-outlined />
                            <span>Team</span>
                            </span>
                        </template>
                        <a-menu-item key="6">Team 1</a-menu-item>
                        <a-menu-item key="8">Team 2</a-menu-item>
                    </a-sub-menu>

                    <a-menu-item key="9">
                        <file-outlined />
                        <span>File</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>

            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>User</a-breadcrumb-item>
                <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb>
                    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    Bill is a cat.
                    </div>
            </a-layout-content>
        </a-layout>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'

import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
    name: '',

    components: {
        PieChartOutlined,
        DesktopOutlined,
        UserOutlined,
        TeamOutlined,
        FileOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined
    },

    setup() {
        return {
            collapsed: ref<boolean>(false),
            selectedKeys: ref<string[]>(['1'])
        }
    }
})

</script>

<style scoped link="">

    .px-header {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff; 
        padding: 0;   
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
</style>