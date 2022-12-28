/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-12-28 15:35:22
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
                component: () => import("@/page/html5/canvas/guaguale"),
            }
        ]
    }
];
