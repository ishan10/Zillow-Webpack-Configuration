const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const __DEV__ = 'development';
const __PROD__ = 'production';

const config ={
	entry : './src/index.js',
	output : {
		filename : '[name].[chunkhash].js',
		path : path.resolve(__dirname, './dist/')
	},
	devServer : {
		contentBase : path.resolve(__dirname, './src/'),
		port:4000
	},
	plugins: [
      new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
    ],
	module :{
		rules :[
			{
				/**
				* Javascript
				**/
				test:/\.js|jsx$/,
				exclude : /(node_modules)/,
				use : {
				loader : 'babel-loader',
				options : {
					presets:['es2015', 'stage-0', 'react']
					}
				}
			},
			{
				/**
				* SCSS
				**/
				test: /\.scss$/,
				use: [
				MiniCssExtractPlugin.loader,
				'css-loader', 
				'sass-loader',
					],
			},
			{
				/**
				* Images
				**/
				test: /\.(jpeg|jpg|png|gif)$/,
				use: {
					loader :'file-loader',
					options: {
					name: '[path][name].[ext]',
					context: ''
  				}
				},
				
			},
			{
				/**
				* SVG
				**/
				test: /\.svg$/,
				use : {
						loader : 'base64-inline-loader',
						options : {
						limit:102400,
						fallback: 'file-loader'
					}
				}
			}
			]
		},
	mode : __DEV__
}
  
module.exports = config;