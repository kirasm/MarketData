var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
      'webpack-dev-server/client?http://0.0.0.0:80',
    './src/index'
  ],
  module: {
   loaders: [
     {
       test: /\.js?$/, loader: 'babel', exclude: /node_modules/
     },
     {
       test: /\.css$/,
       loaders: [
         'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
     ]
     }
   ]
 },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
