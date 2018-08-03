const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const rootPath = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    // 引入babel-polyfill兼容到ie9
    polyfill: ['babel-polyfill'],
    app: ['./src/index.jsx'],
    commons: ['react', 'react-dom', 'react-router-dom', 'redux']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(rootPath, '/src/index.html')
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  output: {
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[hash:8].js',
    path: path.join(rootPath, 'dist')
  },

  // 自动处理文件的后缀，解决引入包必须添加后缀的问题。
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader'],
        include: path.join(rootPath, 'src'),
        exclude: path.join(rootPath, 'node_modules')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              localIndexName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: require.resolve('less-loader') // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      // 动态路由加载
      {
        test: /\.bundle\.js$/,
        use: 'bundle-loader'
      }
    ]
  }
};
