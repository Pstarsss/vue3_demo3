/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-04-13 10:54:08
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
                name: "vue-table-click-version-1",
                path: "/vue/vue-table-click-1",
                meta: {
                    navTitle: "a-table-右键点击-1",
                },
                component: () => import("@/page/vue/vue-table-click-1"),
            },
            {
                name: "vue-table-click-version-2",
                path: "/vue/vue-table-click-2",
                meta: {
                    navTitle: "a-table-右键点击-2",
                },
                component: () => import("@/page/vue/vue-table-click-2"),
            }
        ],
    },
];
