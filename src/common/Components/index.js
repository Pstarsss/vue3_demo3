/*
 * @Author: xingpan
 * @Date: 2021-10-14 15:14:50
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-12-29 18:48:41
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

import DisplayTable from './display-table';

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
        Vue.component('px-table', DisplayTable);
    }
};