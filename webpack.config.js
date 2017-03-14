'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;
const __DEV__ = env === 'development';
const __PRODUCTION__ = env === 'production';

const config = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        main: './index'
    },

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'file-loader',
                query: {
                    name: 'assets/[name].json'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(__DEV__),
            __PRODUCTION__: JSON.stringify(__PRODUCTION__),
            'process.env': {
                NODE_ENV: JSON.stringify(env),
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: (module) => {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        })
    ],

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true
    }
};

if (__DEV__) {
    config.devtool = 'inline-source-map';
    config.devServer = {
        contentBase: path.resolve(__dirname, 'src'),
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 8080
    };
    config.plugins.push(
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    );
}

if (__PRODUCTION__) {
    config.output = {
        filename: '[name].bundle.[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    };

    config.plugins.push(
        new CleanWebpackPlugin(['dist/*']),
        new ExtractTextPlugin('[name].[contenthash].css'),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
            }
        })
    );
}

module.exports = config;
