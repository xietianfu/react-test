const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

const rootPath = path.resolve(__dirname, '..');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: rootPath,
      verbose: true,
      dry: false
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        // 启动并行
        parallel: true,
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        },
        warnings: false
      }
    })
  ]
});
