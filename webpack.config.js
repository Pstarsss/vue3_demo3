const path = require('path');
const vueLoader = require('vue-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
            "vue": "vue/dist/vue.esm-bundler.js"
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
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,  
            // __VUE_OPTIONS_API__ 标志默认值是 true，这就意味着默认情况下 Vue3 项目中会包含支持 Options API 的这部分代码。那么，如果我们在项目中编写的都是 Composition API 代码，其实就不再需要这部分解析 Options API 的代码了，所以这里强烈建议我们对这个标志进行正确的配置，以便在最终构建时获得正确的摇树（tree-shaking，可以实现无用代码的自动删除，即如果发现某部分代码并没有被使用到，那么最终会将这部分代码删除掉，这样一来整体代码的体积会就变得更小些）效果。
            __VUE_PROD_DEVTOOLS__: false
        }),

        new CleanWebpackPlugin(),
        new vueLoader.VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html"
        })
    ]
};
