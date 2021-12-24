import { createApp } from "vue";

import store from "./common/store/store";
import { Router } from "./common/route/index";
import App from "./App.vue";

import { message } from "ant-design-vue";

import components from "./common/components/index";

const app = createApp(App);

app.config.globalProperties.$message = message;

app.use(components);
app.use(store);
app.use(Router);

app.mount("#app");
