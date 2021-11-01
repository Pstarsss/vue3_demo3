/*
 * @Author: xingpan 
 * @Date: 2021-10-30 10:21:57 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-30 10:24:48
 */

import test from './test';

export default [
    {
        name: '我的主页',
        path: '/index',
        component: () => import('@/App.vue')
    },
    ...test
]