'use strict';

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry:{
        index:'./src/index.js'
    },
    watch:false,
    module:{
        rules:[
        {
            test: /\.js$/,
            loader: 'eslint-loader', //代码检查 依赖 .eslintrc
            enforce: 'pre',
            include: [path.join(__dirname, 'src')],
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        },
        {
            test:/\.js$/,
            exclude: /node_modules/,
            loader:'babel-loader' //js编译 依赖.babelrc
        }]
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname , 'dist'),
        library:'calculator',
        libraryTarget: 'umd'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        drop_console: true,
                        drop_debugger: true
                    }
                }
            })
        ]
    },
    plugins:[
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
