/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-01-13 10:26:10
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
          navTitle: "冲哇",
        },
        component: () => import("@/page/red-book/red-book-chapter1"),
      }
    ],
  },
];