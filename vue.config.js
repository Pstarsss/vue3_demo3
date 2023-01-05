/*
 * @Author: xingpan
 * @Date: 2021-10-19 10:44:15
 * @Last Modified by: xingpan
 * @Last Modified time: 2023-01-10 14:19:57
 */

const path = require("path");
const fs = require('fs');
const postcss = require('postcss'); // vue cli 内部使用的postcss  
const resolvePath = (dir) => path.resolve(__dirname, dir);

// https://blog.csdn.net/qq_26769677/article/details/106581478
// function addStyleResource(rule, url) {
//     rule.use('style-resource')
//         .loader('style-resources-loader')
//         .options({
//             patterns: [resolvePath(url)]
//         })
// }
//   chainWebpack: config => {
//       const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
//       types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type), '~@/common/style/index.less'))
//   }

// less的全局变量注入的方法 与 sass，styule的方法 不一样

function getLessVariables(fileUrl, list = {}) {
    if (!fs.existsSync(fileUrl)) return {}; // existsSync 如果文件路径不存在的返回false 
    let lessFile = fs.readFileSync(fileUrl, 'utf8');

    return postcss.parse(lessFile).nodes.reduce((acc, cur) => {
        acc[`${cur.name?.replace(/\:/, '')}`] = `${cur.params}`;
        return acc;
    }, list);
}

const modifyVars = {
    'primary-color': '#ec6800',

    'layout-header-title': '#7575D5',
    'header-title': '30px',
    'header-font-size': '30px',
}  

module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,

    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                // 存放less变量文件的路径
                path.resolve(__dirname, "./src/common/variables.less")
            ]
        }
    },

    css: {
        // sourceMap: false,
        loaderOptions: {
            less: {
                modifyVars,
                javascriptEnabled: true
            },
        },
        requireModuleExtension: false,
    }
};
