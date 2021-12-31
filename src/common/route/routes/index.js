/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:21:57
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-12-28 10:53:44
 */

import test from "./test";

export default [
  {
    name: "homeWeb",
    path: "/index",
    component: () => import("@/App.vue"),
    meta: {
        hideInSider: true
    }
  },
  ...test,
  {
    path: "/",
    redirect: { name: "homeWeb" },
    meta: {
        hideInSider: true
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "homeWeb" },
    meta: {
        hideInSider: true
    }
  },
];
