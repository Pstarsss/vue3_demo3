/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2023-06-07 11:04:52
 */

const component = { template: "<router-view />" };

export default [
    {
        name: "css",
        path: "/css",
        meta: {
            navTitle: "css啦",
            icon: "StarOutlined",
        },
        component,
        children: [
            {
                name: "background-border",
                path: "/css/t1",
                meta: {
                    navTitle: "背景与边框",
                },
                component: () => import("px-admin/page/css/T1"),
            },
            {
                name: "T2",
                path: "/css/t2",
                meta: {
                    navTitle: "测试modal",
                },
                component: () => import("px-admin/page/css/T2"),
            },
            {
                name: "T3",
                path: "/css/t3",
                meta: {
                    navTitle: "白页",
                },
                component: () => import("px-admin/page/css/T3"),
            },
            {
                name: "T4",
                path: "/css/t4",
                meta: {
                    navTitle: "表格demo",
                },
                component: () => import("px-admin/page/css/T4"),
            }
        ]
    }
];
