/*
 * @Author: xingpan
 * @Date: 2021-10-14 15:14:50
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-12-31 16:56:20
 */

import {
  DatePicker,
  ConfigProvider,
  Popconfirm,
  Button,
  Layout,
  Menu,
  Upload,
  Breadcrumb,
} from "ant-design-vue";

export default {
  install(Vue) {
    [
      DatePicker,
      ConfigProvider,
      Popconfirm,
      Button,
      Layout,
      Menu,
      Upload,
      Breadcrumb,
    ].forEach((plugin) => Vue.use(plugin));
  },
};
