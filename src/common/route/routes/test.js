/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:07:54
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-12-28 10:03:55
 */

const component = { template: "<router-view />" };

export default [
  {
    name: "test",
    path: "/test",
    meta: {
        navTitle: 'css啦',
        icon: 'build'
    },
    component,
    children: [
      {
        name: "T1",
        path: "/test/t1",
        meta: {
            navTitle: '一些bg',
        },
        component: () => import("@/page/test/T1"),
      },
      {
        name: "T2",
        path: "/test/t2",
        meta: {
            navTitle: '一些bg1',
        },
        component: () => import("@/page/test/T2"),
      },
      {
        name: "T3",
        path: "/test/t3",
        meta: {
            navTitle: '一些bg2',
        },
        component: () => import("@/page/test/T3"),
      },
      {
        name: "T4",
        path: "/test/t4",
        meta: {
            navTitle: '一些bg3',
        },
        component: () => import("@/page/test/T4"),
      },
    ],
  },
];
