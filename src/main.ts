/*
 * @Author: xingpan 
 * @Date: 2022-12-29 10:57:40 
 * @Last Modified by:   xingpan 
 * @Last Modified time: 2022-12-29 10:57:40 
 */

import { createApp } from "vue";

import { message } from "ant-design-vue";

import * as Icons from "@ant-design/icons-vue";

import App from "./App.vue";

import { Router } from "./common/route/index";

import components from "./common/components/index";

const icons: any = Icons;

const app = createApp(App);

app.config.globalProperties.$message = message;

app.use(components);
app.use(Router);

app.mount("#app");

for (const i in icons) {
    app.component(i, icons[i]);
}
