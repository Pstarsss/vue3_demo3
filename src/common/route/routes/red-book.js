/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-12-28 15:35:43
 */

const component = { template: "<router-view />" };

export default [
    {
        name: "rebBook",
        path: "/reb-book",
        meta: {
            navTitle: "打死不看小红书",
            icon: "ContainerOutlined",
        },
        component,
        children: [
            {
                name: "reb-book-chapter1",
                path: "/red-book/c1",
                meta: {
                    navTitle: "js-methods",
                },
                component: () => import("px-admin/page/red-book/red-book-chapter1"),
            },
            {
                name: "regExp",
                path: "/red-book/regExp",
                meta: {
                    navTitle: "正则",
                },
                component: () => import("px-admin/page/red-book/regExp"),
            }
        ]
    }
];
