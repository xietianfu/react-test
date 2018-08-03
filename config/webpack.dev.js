const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const rootPath = path.resolve(__dirname, '..');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || 'localhost';

module.exports = merge(common, {
  devtool: 'inline-source-map',
  // 环境设置
  mode: 'development',

  devServer: {
    // 开启gzip压缩
    compress: true,
    contentBase: path.join(rootPath, '/dist'),
    https: protocol === 'https',
    host,
    port: 8888,
    proxy: {
      '/api/*': {
        target: 'http://localhost:36742',
        secure: false, // 接受 运行在 https 上的服务
        changeOrigin: true
      }
    }
  },

  plugins: [
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
});
