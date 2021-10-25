const path = require('path');

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
    }
}