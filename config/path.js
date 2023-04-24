/*
 * @Author: xingpan 
 * @Date: 2023-03-14 22:35:45 
 * @Last Modified by: xingpan
 * @Last Modified time: 2023-03-14 22:39:01
 */

const path = require('path');

const appDir = process.cwd(); // 获取当前代码运行的目录

const resolvePath = (relativePath) => {
    return path.resolve(appDir, relativePath);
}

module.exports = resolvePath;