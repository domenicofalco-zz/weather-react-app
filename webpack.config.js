var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'./dev/script/index.jsx'
	],
	output: {
		path: path.join(__dirname, 'public/js'),
		filename: 'bundle.js'
	},
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	resolve: {
    alias: {
			/* risolve i conflitti di duplicazione del modulo react nei vari componenti */
      'react': path.join(__dirname, 'node_modules', 'react')
    },
		extensions: ['', '.js', '.jsx']
	},
	module: {
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
	},
	devServer: {
		contentBase: "./public",
		noInfo: true,
		hot: true,
		inline: true
	}
};
