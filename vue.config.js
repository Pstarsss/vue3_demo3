/*
 * @Author: xingpan
 * @Date: 2021-10-19 10:44:15
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-12-27 10:47:38
 */

const path = require("path");
const fs = require("fs");
const resolvePath = (dir) => path.resolve(__dirname, dir);
// const modifyVars =

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  css: {
    // sourceMap: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    requireModuleExtension: false,
  },

  pluginOptions: {
      'style-resources-loader': {
          preProcessor: 'less',
          patterns: [resolvePath('./src/common/style/variables.less')]
      }
  }
};
