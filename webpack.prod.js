const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src/assets/styles'),
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].chunk.css',
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/images', to: 'images' },
    ]),
  ],
});
