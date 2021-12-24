/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:21:57
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-11-01 15:21:08
 */

import test from "./test";

export default [
  {
    name: "homeWeb",
    path: "/index",
    component: () => import("@/App.vue"),
  },
  ...test,
  {
    path: "/",
    redirect: { name: "homeWeb" },
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "homeWeb" },
  },
];
