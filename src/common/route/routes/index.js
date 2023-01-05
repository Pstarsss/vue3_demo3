/*
 * @Author: xingpan
 * @Date: 2021-10-30 10:21:57
 * @Last Modified by: xingpan
 * @Last Modified time: 2023-01-05 15:40:52
 */

import css from "./css";
import node from "./node";
import webpack from "./webpack";
import redBook from "./red-book";
import netWork from "./network";
import typescript from "./typescript";
import html5 from "./html5";
import vue from "./vue";
import leetcode from "./leetcode";

export default [
    {
        name: "homeWeb",
        path: "/index",
        component: { template: "<div></div>" },
        meta: {
            navTitle: "首页",
            hideInSider: true,
        }
    },
    ...css,
    ...node,
    ...webpack,
    ...redBook,
    ...netWork,
    ...typescript,
    ...html5,
    ...vue,
    ...leetcode,
    {
        path: "/",
        redirect: { name: "homeWeb" },
        meta: {
            hideInSider: true,
        }
    },
    {
        path: "/:catchAll(.*)",
        redirect: { name: "homeWeb" },
        meta: {
            hideInSider: true,
        }
    }
];
