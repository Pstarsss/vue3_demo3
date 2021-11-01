<template>
    <div class="app">
        <a-config-provide :locale="locale">
            <router-view />
        </a-config-provide>
    </div>
</template>

<script lang="ts">

import { 
    ref, 
    defineComponent, 
    onMounted,
    provide,
    readonly
} from "vue";

import axios from 'axios';

import { ResponseKey, StatusKey } from '@/common/ts-interface/response';
import { 
    YQG_STATUS_CODE_SUCCESS, 
    YQG_STATUS_CODE_SSO_NOT_LOGIN, 
    YQG_STATUS_CODE_NOT_LOGIN } 
from '@/common/constant/response-code';

import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');

export default defineComponent({
    name: "App",

    setup (props, context) {
        let locale = ref();

        onMounted(() => {
          //   axios.get("/api");
            init();
            initHttpInterceptor();
        })
            
        function init() {
        }

        function initHttpInterceptor() {
            axios.interceptors.request.use(
                function (config) {
                    // 请求前 做些东西； 
                    const { url } = config;

                    console.log('请求拦截器', config);
                    return config;
                }, 
                function (err) {
                    // 请求失败拦截；
                    console.log('请求失败', err);
                    return Promise.reject(err);
                }
            );

            axios.interceptors.response.use(
                function(res:any) {
                    const {data: {status: {code, detail} = {code: 0, detail: ''}} = {}} = res;

                    // responseType 
                    // code 状态码啥的 
                    switch(code) {
                        case YQG_STATUS_CODE_SUCCESS: return Promise.resolve(res); break;
                        case YQG_STATUS_CODE_SSO_NOT_LOGIN: {

                        }; break;

                        case YQG_STATUS_CODE_NOT_LOGIN: {

                        }; break;

                        default: { new Error(detail) }
                    }

                    console.log('响应拦截器', res);
                    return res;
                },

                function(err) {
                    console.log('响应失败', err);
                    return Promise.reject(err);
                }
            )
        } 

        function changeLocale(value) {
            locale = value;
        }

        provide('locale', readonly(locale));
        provide('changeLocale', changeLocale);

        return {
            init,
            initHttpInterceptor,
            moment,
            locale: enUS
        }
  }
});
</script>

<style>
@import '~@/common/style/common.css';
@import '~ant-design-vue/dist/antd.css';

</style>