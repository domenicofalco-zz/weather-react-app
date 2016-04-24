const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		['.', 'dev', 'scripts', 'index.jsx'].join(path.sep)
	],
	resolve: {
		modulesDirectories: ['node_modules'],
		alias: {
      'react':[__dirname, 'node_modules', 'react'].join(path.sep)
    },
		extensions: ['', '.js', '.jsx']
	},
	output: {
		filename: 'bundle.js'
	},
	// devtool: 'eval-source-map',
	module: {
		devtool: null,
		loaders: [
			{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel'],
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			}
		]
	}
	/*FOR PRODUCTION
	plugins:[
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        mangle: false,
				source: false
      }
    })
  ]*/
};
