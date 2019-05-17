module.exports = {
  entry: './src/App.jsx',
  output: {
    path: 'D:\\Google Drive\\Website\\static',
    filename: 'app.bundle.js',
  },
  devtool: 'source-map',

  module: {
    rules: [


      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }


		  ]
		  ,
  },
  watch: true,
  mode: 'development',
};
