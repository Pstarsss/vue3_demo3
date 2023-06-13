/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-12-28 15:35:31
 */

const component = { template: "<router-view />" };

export default [
    {
        name: "node",
        path: "/node",
        meta: {
            navTitle: "node",
            icon: "ContainerOutlined",
        },
        component,
        children: [
            {
                name: "node_demo_1",
                path: "/node/d1",
                meta: {
                    navTitle: "node操作命令行",
                },
                component: () => import("px-admin/page/node/node_1"),
            }
        ]
    }
];
