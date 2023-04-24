const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const mode = 'production';
process.env.stage = mode;

module.exports = {
    mode,

    plugins: [
        new CleanWebpackPlugin(),
    ]
};
