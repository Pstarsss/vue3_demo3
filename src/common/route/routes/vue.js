/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-02-22 10:27:17
 */

const component = { template: "<router-view />" };

export default [
  {
    name: "vue",
    path: "/vue",
    meta: {
      navTitle: "vue",
      icon: "ContainerOutlined",
    },
    component,
    children: [
      {
        name: "vue-1",
        path: "/vue/d1",
        meta: {
          navTitle: "vue源码",
        },
        component: () => import("@/page/vue/vue_1"),
      }
    ],
  },
];
