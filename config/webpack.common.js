const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');

const theme = require('../src/theme.js');

module.exports = {
  entry: {
    // 引入babel-polyfill兼容到ie9
    polyfill: ['babel-polyfill'],
    app: [path.join(rootPath, 'src/index.jsx')],
    commons: ['react', 'react-dom', 'react-router-dom', 'redux'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(rootPath, '/src/index.html'),
      // chunksSortMode: 'none',
    }),
    new HtmlWebpackPlugin({
      filename: 'updata.html',
      chunks: [],
      template: path.join(rootPath, '/src/pages/updata.html'),
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/favicon.ico',
        to: 'favicon.ico',
      },
    ]),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
  output: {
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[hash:8].js',
    path: path.join(rootPath, 'dist'),
    publicPath: '/',
  },

  // 自动处理文件的后缀，解决引入包必须添加后缀的问题。
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader'],
        include: path.join(rootPath, 'src'),
        exclude: path.join(rootPath, 'node_modules'),
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            // 如何需要复写modules中的样式需要添加
            options: {
              modifyVars: theme,
              javascriptEnabled: true,
            },
          },
        ],
      },
      // {
      //   test: /\.less$/,
      //   // exclude: [/node_modules/],
      //   include: [
      //     path.join(rootPath, '/node_modules/antd'),
      //     path.join(rootPath, '/src'),
      //   ],
      //   use: [
      //     require.resolve('style-loader'),
      //     {
      //       loader: require.resolve('css-loader'),
      //       options: {
      //         modules: true,
      //         localIndexName: '[name]__[local]___[hash:base64:5]',
      //       },
      //     },
      //     {
      //       loader: require.resolve('less-loader'), // compiles Less to CSS
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:4].[ext]',
              outputPath: 'static/images/',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        // include: path.join(rootPath, './assets/svgs'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {},
          },
          'svg-fill-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      // 动态路由加载
      {
        test: /\.bundle\.js$/,
        use: 'bundle-loader',
      },
    ],
  },
};
