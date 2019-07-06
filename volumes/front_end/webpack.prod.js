const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: 'bundle.[contenthash].js',
		chunkFilename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'file:///Users/louisalemar/Desktop/superhero-api-app/volumes/front_end/dist/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
				]
			},
		]
	},
	plugins: [
	new CleanWebpackPlugin(),
	new MiniCssExtractPlugin({
		filename: 'styles.[contenthash].css'
	}),
	]
})