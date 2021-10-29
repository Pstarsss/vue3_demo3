/*
 * @Author: xingpan 
 * @Date: 2021-10-29 14:57:02 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-29 15:18:47
 */

import { createRouter, createWebHashHistory } from 'vue-router';

const home = { template: '<div>Home</div>' };
const about = { template: '<div>About</div>' };

const routes = [
    {path: '/', component: home},
    {path: '/about', component: about}
]

export const Router = createRouter({
    history: createWebHashHistory(),
    routes
});