const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { WEBSITE_NAME, APP_MOUNT_ID, ACCESS_TOKEN } = process.env

module.exports = {
	entry: {
		app: './src/index.js'
	},
	module: {
		rules: [
		{
			test: /\.m?js|jsx$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		}
		]
	},
	output: {
		filename: 'bundle.[contenthash].js',
		chunkFilename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	plugins: [
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
		title: `${WEBSITE_NAME}`,
		favicon: "./src/images/favicon.ico",
		template: './src/index.ejs',
		appMountId: 'react-root'
	}),
	new webpack.DefinePlugin({
		APP_MOUNT_ID: JSON.stringify(APP_MOUNT_ID),
		ACCESS_TOKEN: JSON.stringify(ACCESS_TOKEN)
	})
	]
}