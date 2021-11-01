const path = require('path');
const resolvePath = dir => path.resolve(__dirname, dir);

module.exports = {
    entry: './src/main.ts',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        proxy: {
            "/api": {
                target: "https://loan-admin-test.yangqianguan.com",
                changeOrigin: true
            }
        }
    },

    resolve: {
        alias: {
            '@': resolvePath('src'),
            'px-admin': './src'
        },
        //因import引入的vue文件都没有加.vue后缀导致报404，所以加了这个配置
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["vue-style-loader" ,"style-loader", "css-loader"],
                options: {
                    import: true,
                },
            }
        ]
    }
}