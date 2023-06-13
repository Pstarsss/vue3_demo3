/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2023-05-23 19:17:30
 */

const component = { template: "<router-view />" };

export default [
    {
        name: "html5",
        path: "/html5",
        meta: {
            navTitle: "html5",
            icon: "ContainerOutlined",
        },
        component,
        children: [
            {
                name: "canvas-scratch",
                path: "/canvas/scratch",
                meta: {
                    navTitle: "刮刮乐",
                },
                component: () => import("px-admin/page/html5/canvas/guaguale"),
            },
            {
                name: "lottery-slot-machine",
                path: "/lottery/slot-machine",
                meta: {
                    navTitle: "老虎机",
                },
                component: () => import("px-admin/page/html5/lottery/slot-machine"),
            }
        ]
    }
];
