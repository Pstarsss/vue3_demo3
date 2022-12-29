<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 10:42:21 -->
<!-- @desc index -->

<template>
    <div class="app">
        <a-config-provider :locale="locale">
            <px-layout />
        </a-config-provider>
    </div>
</template>

<script lang="ts">

import vue, { ref, defineComponent, onMounted, provide, readonly } from "vue";

import { message } from "ant-design-vue";

import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";

import PxLayout from "./common/components/px-layout/index.vue";

import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("en");

export default defineComponent({

    name: "App",

    components: {
        PxLayout,
    },

    setup() {

        let locale: any = ref();

        onMounted(() => {
            initProvide();
        });

        function initProvide() {
            provide("$messageInfo", message.info);
            provide("$messageSuccess", message.success);
            provide("$messageError", message.error);
            provide("$messageWarning", message.warning);
            provide("$messageWarn", message.warn);
            provide("$messageLoading", message.loading);
            provide("locale", readonly(locale));
            provide("changeLocale", changeLocale);
        }

        function changeLocale() {
            locale = zhCN;
            moment.locale("zh-cn");
        }

        return {
            moment,
            locale: enUS,
        };

    }
});
</script>

<style lang="less">
@import "~@/common/style/index.less";
</style>
