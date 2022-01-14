/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:21:57
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-01-13 10:25:54
 */

import test from "./test";
import node from "./node";
import webpack from "./webpack";
import redBook from "./red-book";

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
  ...redBook,
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
