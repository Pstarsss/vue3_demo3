<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script lang="ts">

import { defineComponent, onMounted } from "vue";

import axios from 'axios';

import { ResponseKey, StatusKey } from '../src/common/ts-interface/response'

export default defineComponent({
    name: "App",

    components: {},

    setup () {
        onMounted(() => {
          //   axios.get("/api");
            init();
            initHttpInterceptor();
        })
    
            
        function init() {
            const {$message} = this;
            console.log('$message', $message);
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

                    // if (res.data && res.data.status) {
                    //     const {code, detail} = res.data.status;
                    //     // responseType 
                    //     // code 状态码啥的 
                    //     switch(code) {
                    //         case 200: return Promise.resolve(res); break;

                    //         default: { new Error(detail) }
                    //     }
                    // }

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
