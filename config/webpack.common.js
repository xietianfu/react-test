const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');
const srcPath = path.resolve(rootPath, 'src');

module.exports = {
  entry: {
    // 引入babel-polyfill兼容到ie9
    // polyfill: ['babel-polyfill'],
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
        from: 'src/assets/styles',
        to: 'assets/styles',
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
    alias: {
      '@': srcPath,
    },
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        exclude: ['/node_modules/'],
        include: path.join(rootPath, 'src/container'),
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: require.resolve('less-loader'), // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.less$/,
        include: path.join(rootPath, 'src/assets'),
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
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
