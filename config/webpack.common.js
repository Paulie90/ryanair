const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: ['./src/app.js', './src/scss/main.scss']
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['ng-annotate', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw' },
      // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      // helps to load bootstrap's css.
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.woff2$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml'
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    // add alias for application code directory
    // alias: {
    //   '~': path.resolve(__dirname, '..', 'src')
    // },
  },

  sassLoader: {
    includePaths: [path.resolve(__dirname, '..', 'src/scss')],
    sourceMap: true
  },

  postcss: () => [autoprefixer]
};
