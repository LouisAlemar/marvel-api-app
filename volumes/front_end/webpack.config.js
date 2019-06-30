const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
	  app: './src/index.js'
	},
	devServer: {
	  contentBase: path.join(__dirname, 'dist'),
	  host: '0.0.0.0',
	  port: 3000,
	  historyApiFallback: true,
	},
	output: {
	  filename: '[name].bundle.js',
	  chunkFilename: '[name].bundle.js',
	  path: path.resolve(__dirname, 'dist'),
	  publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: "./src/images/favicon.ico"
		})
	]
}