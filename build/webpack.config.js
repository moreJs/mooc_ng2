'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
let extractCSS = new ExtractTextPlugin('[name].css');
module.exports = {
    // 字符串、数组和对象
    entry: {
        index: './src/bootstrap',
    },
    output: {
        path: path.join('./build'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [{
                test: /\.ts$/,
                include: [
                    path.join(__dirname, './src')
                ],
                exclude: /node_modules/,
                loader: 'ts',
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['to-string-loader', 'css-loader'])
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(['to-string-loader', 'css-loader', 'less-loader'])
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }]
    },
    resolve: {
        root: [
            path.join(__dirname, './src'),
        ],
        extensions: ['', '.ts', '.js']
    },
    plugins: [
        extractCSS,
        commonsPlugin
    ]
};
//# sourceMappingURL=webpack.config.js.map