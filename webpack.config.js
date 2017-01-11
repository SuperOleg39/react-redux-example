'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    
    context: path.resolve(__dirname, 'src'),
    
    entry: {
        main: './index'
    },
    
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    resolve: {
       extensions: ['', '.js', '.jsx']
    },
    
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    devServer: {
        historyApiFallback: true
    }
};

module.exports = config;
