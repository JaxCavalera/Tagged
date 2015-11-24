var path = require('path');
var webpack = require('webpack');
var ip = require('ip');
var HtmlGenerator = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var LOCAL_IP = ip.address();
var MY_PORT = 8080;

module.exports = {
    entry: './app/promise-bootstrap.js',

    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
    },

    devtool: 'eval',

    module:	{
        loaders:
    [
        {
            test: /\.jsx?$/, // scan for js and jsx files only
            loader: 'babel',
            include: APP_PATH,
            exclude: /node_modules/,
        },
        {
            test: /\.css$/, // scan for css files only
            loader: 'style!css!postcss-loader',
            include: APP_PATH,
        },
        {
            test: /\.png$/,
            loader: 'url?limit=100000&mimetype=image/png',
            include: APP_PATH,
        },
        {
            test: /\.jpg$/,
            loader: 'file',
            include: APP_PATH,
        },
        {
            test: /\.json$/,
            loader: 'file',
            include: APP_PATH,
        },
    ],
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: LOCAL_IP,
        port: MY_PORT,
    },
    postcss: function() {
        return [autoprefixer({browsers: ['> 0.8%']})];
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlGenerator({
            title: 'Tagged',
            filename: 'index.html',
            template: APP_PATH + '/index_template.html',
        }),
	],
};
