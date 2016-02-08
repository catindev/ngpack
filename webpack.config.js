'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

let APP = __dirname + '/src';

module.exports = {

	cache: true,

	entry: {
    app: null,
    vendor: [
			'angular',
			'baobab',
			'angular-route',
			'angular-component',
			'angular-animate',
			'angular-sanitize',
			'angular-strap/dist/angular-strap.min.js',
      'angular-strap/dist/angular-strap.tpl.min.js',
		],
  },

  output: {
      path: __dirname + '/build',
      filename: NODE_ENV === 'development' ? '[name].bundle.js' : '[name].[hash].js'
  },

	resolve: {
    root: path.resolve(APP)
	},

  watch: NODE_ENV === 'development',
	watchOptions: {
		aggregateTimeout: 100
	},

	module: {
      preLoaders: [],
	    loaders: [
		    {
		      test: /\.js$/,
		      loader: 'babel?presets[]=es2015',
		      exclude: /node_modules/
		    },
		    {
					test: /\.(css|less)$/,
					loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less",
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
		    { test: /\.html$/, loader: 'raw' }
	    ]
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: APP + '/index.html',
			inject: 'body'
		}),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		})
	],

	devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null
};

if (NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	);
  module.exports.entry.app = APP + '/index.js';
} else {
  module.exports.entry.app = [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    APP + '/index.js'
  ];
}
