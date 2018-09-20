const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'development',
	target : 'node',
	externals: [nodeExternals()],
	entry: { 
		index : path.join(__dirname, '/src/index.ts') 
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'app.js',
	},
	resolve : {
		// modules : ['node_modules'],
		extensions: ['.ts']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['ts-loader'],
			}
		]
	}
};