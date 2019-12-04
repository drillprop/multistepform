const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(common, {
  mode: 'production',
  optimization: {
    minimize: true
  },
  plugins: [new CleanWebpackPlugin()]
});
