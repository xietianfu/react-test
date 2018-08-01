const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const rootPath = path.resolve(__dirname, '..');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  // 环境设置
  mode: 'development',

  devServer: {
    contentBase: path.join(rootPath, '/dist'),
    hot: true
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
