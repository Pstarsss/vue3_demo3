/*
 * @Author: xingpan
 * @Date: 2021-10-14 15:14:50
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-04-09 20:38:14
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
  Table,
  Input
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
      Table,
      Input
    ].forEach((plugin) => Vue.use(plugin));
  },
};
