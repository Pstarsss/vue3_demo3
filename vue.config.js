/*
 * @Author: xingpan 
 * @Date: 2021-10-19 10:44:15 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-31 10:37:02
 */

const path = require('path');
const fs = require('fs');
const resolvePath = dir => path.resolve(__dirname, dir);
// const modifyVars = 

module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,
    css: {
        // sourceMap: false,
        loaderOptions: {
          less: {
            javascriptEnabled: true,
          }
        },
        requireModuleExtension: false
    }
}