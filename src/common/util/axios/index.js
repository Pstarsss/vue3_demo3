/*
 * @Author: xingpan 
 * @Date: 2021-10-25 19:01:19 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-25 19:19:52
 */

import axios from 'axios';

const Instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: ''
})

Instance.initHttpInterceptor = function initHttpInterceptor() {
    Instance.interceptors.request.use(
        function (config) {
            // 请求前 做些东西； 
            console.log('请求拦截器');
            return config;
        }, 
        function (err) {
            // 请求失败拦截；
            return Promise.reject(err);
        }
  );

  Instance.interceptors.response.use(
      function(res) {
          console.log('响应拦截器');
          return res;
      },
      function(err) {
          console.log('响应失败');
          return Promise.reject(err);
      }
  )
} 

export default Instance 