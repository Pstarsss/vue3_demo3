/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-04-08 19:20:07
 */

const component = { template: "<router-view />" };

export default [
    {
        name: "vue",
        path: "/vue",
        meta: {
            navTitle: "vue",
            icon: "ContainerOutlined",
        },
        component,
        children: [
            {
                name: "vue-1",
                path: "/vue/d1",
                meta: {
                navTitle: "vue源码",
                },
                component: () => import("@/page/vue/vue_1"),
            },
            {
                name: "vue-2",
                path: "/vue/d2",
                meta: {
                navTitle: "vue右键点击",
                },
                component: () => import("@/page/vue/v_1"),
            },
            {
                name: "vue-table-click",
                path: "/vue/vue-table-click",
                meta: {
                navTitle: "vue表格内的右键点击",
                },
                component: () => import("@/page/vue/vue-table-click"),
            },
            {
                name: "vue-table-dropDown",
                path: "/vue/vue-table-dropDown",
                meta: {
                navTitle: "vue表头dropDown",
                },
                component: () => import("@/page/vue/vue-table-dropDown"),
            }
        ],
    },
];
