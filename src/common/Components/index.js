/*
 * @Author: xingpan
 * @Date: 2021-10-14 15:14:50
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-12-29 14:17:05
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
    Input,
    Tooltip,
    Dropdown
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
            Input,
            Tooltip,
            Dropdown
        ].forEach((plugin) => Vue.use(plugin));
    }
};