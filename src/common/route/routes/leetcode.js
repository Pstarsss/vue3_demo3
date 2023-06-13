/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2023-01-05 15:40:14
 */

const component = { template: "<router-view />" };

export default [
    {
        name: "leetcode",
        path: "/leetcode",
        meta: {
            navTitle: "leetcode",
            icon: "ContainerOutlined",
        },
        component,
        children: [
            {
                name: "q",
                path: "/leetcode/q",
                meta: {
                    navTitle: "my题库",
                },
                component: () => import("px-admin/page/leetcode/index"),
            }
        ]
    }
];
