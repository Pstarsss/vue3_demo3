/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-04-12 10:47:38
 */

const component = { template: "<router-view />" };

export default [
    {
        name: "test",
        path: "/test",
        meta: {
        navTitle: "css啦",
            icon: "StarOutlined",
        },
        component,
        children: [
            {
                name: "background-border",
                path: "/test/t1",
                meta: {
                    navTitle: "背景与边框",
                },
                component: () => import("@/page/test/T1"),
            },
            {
                name: "T2",
                path: "/test/t2",
                meta: {
                    navTitle: "测试modal",
                },
                component: () => import("@/page/test/T2"),
            },
            {
                name: "T3",
                path: "/test/t3",
                meta: {
                    navTitle: "白页",
                },
                component: () => import("@/page/test/T3"),
            },
            {
                name: "T4",
                path: "/test/t4",
                meta: {
                    navTitle: "表格demo",
                },
                component: () => import("@/page/test/T4"),
            }
        ]
    }
];
