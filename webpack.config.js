'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

var path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

var APP = __dirname + '/src';

module.exports = {
    entry: {
    	app: ['webpack/hot/dev-server', APP + '/index.js']
    },
    output: {
        path: __dirname + '/build',
        filename: NODE_ENV === 'development' ? '[name].bundle.js' : '[name].[hash].js'
    },

    watch: NODE_ENV === 'development',
	watchOptions: {
		aggregateTimeout: 100
	},

	module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],		
	    loaders: [
		    {
		      test: /\.js$/,
		      loader: 'babel?presets[]=es2015&cacheDirectory=true',
		      exclude: /node_modules/
		    }, 
		    {
		      test: /\.less$/, loader: "style!css!less" 
		    }, 
		    {
		      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
		      loader: 'file'
		    }, 
		    {
		      test: /\.html$/,
		      loader: 'raw'
		    }
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

	devtool: NODE_ENV === 'development' ?
		'cheap-inline-module-source-map' : null
}

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
}