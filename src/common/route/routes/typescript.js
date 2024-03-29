/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-12-28 15:35:47
 */

const component = { template: "<router-view />" };

export default [
    {
        name: "typescript",
        path: "/typescript",
        meta: {
            navTitle: "typescript",
            icon: "ContainerOutlined",
        },
        component,
        children: [
            {
                name: "typescript-1",
                path: "/ts/d1",
                meta: {
                    navTitle: "ts.json",
                },
                component: () => import("px-admin/page/ts/ts_1"),
            }
        ]
    }
];
