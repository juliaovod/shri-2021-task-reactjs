const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(require('./webpack.base.conf.js'), {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  devtool: false,
});
