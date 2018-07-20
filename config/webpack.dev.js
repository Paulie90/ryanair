const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devServer: {
    contentBase: 'src/',
    historyApiFallback: true,
    port: 3000,
  },
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'postcss-loader', 'sass?config=sassLoader'] },
    ]
  },
});
