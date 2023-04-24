const path = require('path');
const vueLoader = require('vue-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolvePath = (dir) => path.resolve(__dirname, dir);

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: ['autoprefixer']
        }
    }
};

module.exports = {
    entry: "./src/main.ts",

    mode: 'development',

    devtool: 'eval-cheap-module-source-map',

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "js/[name].js",
        publicPath: '/'
    },

    // 添加devServer 方便保存后的页面实时刷新； 
    devServer: {
        static: './build',
    },

    optimization: {
        runtimeChunk: 'single',
    },

    resolve: {
        alias: {
            "@": resolvePath("src"),
            "px-admin": "./src",
        },

        //因import引入的vue文件都没有加.vue后缀导致报404，所以加了这个配置
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsxSuffixTo: [/\.vue$/],
                            compilerOptions: {
                                allowJs: true,
                                // vue recommend, https://vuejs.org/v2/guide/typescript.html#Recommended-Configuration
                                module: 'es2015'
                            }
                        }
                    }
                ]
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: 'usage',
                                corejs: 3 // 新版本的@babel/polyfill包含了core-js@2和core-js@3版本，所以需要声明版本，否则webpack运行时会报warning
                            }
                        ]
                    ]
                }
            },
            { test: /\.vue$/, use: ["vue-loader"] },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", postcssLoader, {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|otf)$/,
                type: 'asset/resource'
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new vueLoader.VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html"
        })
    ]
};
