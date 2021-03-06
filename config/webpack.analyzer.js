const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const common = require('./webpack.common.js');
const rootPath = path.resolve(__dirname, '..');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new UglifyJSPlugin(), new BundleAnalyzerPlugin()]
});
