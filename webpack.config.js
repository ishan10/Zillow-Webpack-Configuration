const path = require('path');

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
			]
		},
	mode : __DEV__
}
  
module.exports = config;