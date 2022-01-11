/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:21:57
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-12-31 16:35:28
 */

import test from "./test";

export default [
  {
    name: "homeWeb",
    path: "/index",
    component: { template: "<div></div>" },
    meta: {
      navTitle: "首页",
      hideInSider: true,
    },
  },
  ...test,
  {
    path: "/",
    redirect: { name: "homeWeb" },
    meta: {
      hideInSider: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "homeWeb" },
    meta: {
      hideInSider: true,
    },
  },
];
