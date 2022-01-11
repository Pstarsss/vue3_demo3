import { createApp } from "vue";

import store from "./common/store/store";
import { Router } from "./common/route/index";
import App from "./App.vue";

import { message } from "ant-design-vue";

import * as Icons from "@ant-design/icons-vue";

import components from "./common/components/index";

const icons: any = Icons;

const app = createApp(App);

app.config.globalProperties.$message = message;

app.use(components);
app.use(store);
app.use(Router);

app.mount("#app");

for (const i in icons) {
  app.component(i, icons[i]);
}
