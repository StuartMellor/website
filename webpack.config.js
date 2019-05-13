module.exports = {
	entry : './src/App.jsx',
	output : {
		path : 'D:\\Google Drive\\Website\\static',
		filename : 'app.bundle.js'
	},
	devtool : 'source-map',

	module : {
		loaders : [ {
			test : /\.css$/,
			loader : 'style-loader'
		}, {
			test : /\.css$/,
			loader : 'css-loader',
			query : {
				modules : true,
				localIdentName : '[name]__[local]___[hash:base64:5]'
			}
		}, {
			test : /\.jsx$/,
			loader : 'babel-loader',

			query : {
				presets : [ 'react', 'env' ]
			}
		}, ]
	},
	watch : true
};

