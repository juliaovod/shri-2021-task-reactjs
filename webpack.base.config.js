const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['node_modules'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'UiKit': path.resolve(__dirname, './src/ui-kit'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: isDevelopment ? '[local]___[hash:base64:10]' : '[hash:base64:10]',
              },
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: /\.module\.css$/,
      },
    ],
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'app.css',
      linkType: 'text/css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'static',
          to: 'static',
        },
      ],
    }),
  ],
};
