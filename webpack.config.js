'use strict';

/* PRODUCTION BUILD */

const
	path = require('path'),
	NODE_ENV = 'production',
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	APP = __dirname + '/src';

module.exports = {

	cache: true,

	entry: {
    app: [ APP + '/index.js'],
    vendors: [
			'angular/angular.js',
			'baobab',
			'livr',
			'angular-route',
			'angular-animate',
			'angular-sanitize',
			'superagent',
		],
  },

  output: {
    path: __dirname + '/public',
    filename: '[name].[hash].js'
  },

	resolve: {
    root: path.resolve(APP)
	},

  watch: false,

	module: {
      preLoaders: [],
	    loaders: [
		    {
		      test: /\.js$/,
		      loader: 'babel?presets[]=es2015',
		      exclude: /node_modules/
		    },
		    {
					test: /\.less$/,
					loader: 'style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!less'
				},
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract(
						'style-loader',
						'css'
					)
				},
				{
					test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					loader: 'url-loader?name=assets/[hash][name].[ext]&limit=10000&mimetype=application/font-woff'
				},
				{
						test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
						loader: 'file-loader?name=assets/[hash][name].[ext]'
				},
				{
						test: /\.jpg|\.png|\.mp3/,
						loader: 'file-loader?name=assets/[hash][name].[ext]'
				},
		    {
					test: /\.html$/,
					loader: 'raw'
				},
	    ]
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			'angular' : 'angular',
		}),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new HtmlWebpackPlugin({
			template: APP + '/index.html',
			inject: 'body',
		}),
		new webpack.optimize.CommonsChunkPlugin(
			'vendors', 'vendors.[hash].js'
		),
		new ExtractTextPlugin('common.[hash].css', { allChunks: true }),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			mangle: false,
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: false
			},
		}),
	],

	devtool: null
};
