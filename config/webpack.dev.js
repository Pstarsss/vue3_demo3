const mode = 'development';
process.env.stage = mode;

module.exports = {
    mode,

    devtool: 'eval-cheap-module-source-map',
    // 添加devServer 方便保存后的页面实时刷新； 
    devServer: {
        static: './build',
    }
};
