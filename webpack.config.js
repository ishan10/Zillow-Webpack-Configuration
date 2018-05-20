const path = require('path');

const __DEV__ = 'development';
const __PROD__ = 'production';

const config ={
	entry : './src/index.js',
	output : {
		filename : 'bundle.js',
		path : path.resolve(__dirname, './dist/')
	},
	devServer : {
		contentBase : path.resolve(__dirname, './src/'),
		port:4000
	},
	mode : __DEV__
}
  
module.exports = config;