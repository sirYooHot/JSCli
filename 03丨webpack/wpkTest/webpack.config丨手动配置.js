module.exports = {
	entry: './src/index.js',
	output: {
		path: _dirname +'/dist',
		filename: 'main.js'
	},
	module: {
		loaders: {
			test: '/\.css$/',
			loader: 'style-loader!css-loader'
		}
	},
	devServer:{
		port: 8081// 修改端口
	}
	
}
