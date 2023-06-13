/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2023-03-21 22:48:15
 */

const component = { template: "<router-view />" };

export default [
    {
        name: "network",
        path: "/network",
        meta: {
            navTitle: "network",
            icon: "ContainerOutlined",
        },
        component,
        children: [
            {
                name: "network_http",
                path: "/network/http",
                meta: {
                    navTitle: "http知识",
                },
                component: () => import("px-admin/page/network/http"),
            },
            {
                name: "network_xss",
                path: "/network/xss",
                meta: {
                    navTitle: "xss攻击",
                },
                component: () => import("px-admin/page/network/xss"),
            },
        ]
    }
];
