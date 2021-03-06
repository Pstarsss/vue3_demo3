/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-04-12 10:46:53
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
                component: () => import("@/page/network/http"),
            }
        ],
    },
];
