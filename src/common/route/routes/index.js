/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:21:57
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-01-12 18:23:36
 */

import test from "./test";
import node from "./node";
import webpack from "./webpack";


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
  ...node,
  ...webpack,
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
