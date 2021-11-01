/*
 * @Author: xingpan 
 * @Date: 2021-10-29 14:57:02 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-30 10:26:29
 */

import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes/index';

export const Router = createRouter({
    history: createWebHistory(),
    routes
});