var path = require('path');
var webpack = require('webpack');
var ip = require('ip');
var htmlgenerator = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var LOCAL_IP = ip.address();
var MY_PORT = 8080;

module.exports =
{
	entry: './app/index.jsx',
	output:
	{
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	module:
	{
		loaders:
		[
			{
				test: /\.jsx?$/, // scan for js and jsx files only
				loader: 'babel',
				//include: /src/
				//include: path.join(__dirname, './src')
				//path.resolve(APP_PATH, 'home')
				include: APP_PATH
			},
			{
				test: /\.css$/, // scan for css files only
				loader: 'style!css!postcss-loader',
				include: APP_PATH
			},
			{
				test: /\.png$/,
				loader: 'url?limit=100000&mimetype=image/png',
				include: APP_PATH
			},
			{
				test: /\.jpg$/,
				loader: 'file',
				include: APP_PATH
			}
		]
	},
	devServer:
	{
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		host: LOCAL_IP,
		port: MY_PORT
	},
	postcss: function ()
	{
        return [autoprefixer({browsers: ['> 1%']})];
    },
	plugins:
	[
		new webpack.HotModuleReplacementPlugin(),
		new htmlgenerator({
			title: 'Tagged',
			filename: 'index.html',
			template: APP_PATH+'/index_template.html',
			favicon: APP_PATH+'/heading/images/favicon.ico'
		})
	]
};
