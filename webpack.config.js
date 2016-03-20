'use strict';

var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    // Create source maps
    devtool: 'source-map',
    entry: {
        // Components
        login: './client/components/login'
    },
    output: {
        path: __dirname + '/public/bundle',
        filename: '[name].entry.bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        preLoaders: [{
            // jade files are riot tags
            test: /\.jade$/,
            exclude: /node_modules/,
            loader: 'riotjs-loader',
            query: {
                type: 'babel',
                template: 'jade'
            }
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            // We do not want to mix js and css in the output, that is 
            // the reason for the ExtractTextPlugin
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'common.js'
        }),
        new ExtractTextPlugin('styles.css')
    ]
};
