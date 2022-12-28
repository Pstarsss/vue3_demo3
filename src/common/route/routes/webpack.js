/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-12-28 15:36:01
 */

const component = { template: "<router-view />" };

export default [
    {
        name: "webpack",
        path: "/webpack",
        meta: {
            navTitle: "webpack",
            icon: "ContainerOutlined",
        },
        component,
        children: [
            {
                name: "webpack_demo_1",
                path: "/webpack/d1",
                meta: {
                    navTitle: "webpack理论知识",
                },
                component: () => import("@/page/webpack/webpack_1"),
            }
        ]
    }
];
