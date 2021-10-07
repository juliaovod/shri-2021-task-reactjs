const path = require('path');

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

module.exports = merge(require('./webpack.base.config.js'), {
  mode: 'development',
  plugins: [
    new FriendlyErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'app.css',
      linkType: 'text/css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
  target: 'web',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    https: false,
    port: 8080,
    watchFiles: ['./src/**/*'],
  },
});
