const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const rootPath = path.resolve(__dirname, '..');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const env = process.env.ENV;

if (env) {
  console.log('正在构建测试服务器所有的dist目录');
} else {
  console.log('正在使用本地的测试环境');
}

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
        target: 'http://10.0.0.110:9494', // 隋婧一本机
        // target: 'http://10.0.0.107:9900', // 隋婧一本机
        // target: 'http://quoter-web.test.cdecube.com', // 测试地址
        secure: false, // 接受 运行在 https 上的服务
        changeOrigin: true,
      },
    },
  },

  plugins: [
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
    new CleanWebpackPlugin(['dist'], {
      root: rootPath,
      verbose: true,
      dry: false,
    }),
  ],
});
