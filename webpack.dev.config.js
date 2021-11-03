const path = require('path');

const { merge } = require('webpack-merge');

module.exports = merge(require('./webpack.base.config.js'), {
  mode: 'development',
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
