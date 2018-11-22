const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const rootPath = path.resolve(__dirname, '..');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';

module.exports = merge(common, {
  devtool: 'inline-source-map',
  // 环境设置
  mode: 'development',

  devServer: {
    // 开启gzip压缩
    compress: false,
    contentBase: path.join(rootPath, '/dist'),
    https: protocol === 'https',
    host: '0.0.0.0',
    port: 8888,
    open: true,
    overlay: true,
    useLocalIp: true,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        // target: 'http://localhost:36742',
        target: 'http://10.0.2.127:8888',
        secure: false, // 接受 运行在 https 上的服务
        changeOrigin: true,
      },
    },
  },

  plugins: [
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
  stats: 'errors-only',
});
