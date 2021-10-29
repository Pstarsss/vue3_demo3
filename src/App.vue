<template>
  <div>
      <span>
        111
          <hr>
      </span>

  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted } from "vue";

import axios from 'axios';

import { ResponseKey, StatusKey } from '@/common/ts-interface/response';
import { 
    YQG_STATUS_CODE_SUCCESS, 
    YQG_STATUS_CODE_SSO_NOT_LOGIN, 
    YQG_STATUS_CODE_NOT_LOGIN } 
from '@/common/constant/response-code';

export default defineComponent({
    name: "App",

    components: {},

    setup (props, context) {
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

        return {
            init,
        }
  }
});
</script>

<style scoped>

hr {
    height: .5em;
    background: currentColor;
}
</style>