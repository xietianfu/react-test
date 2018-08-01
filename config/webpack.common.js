const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(rootPath, '/src/index.html')
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(rootPath, 'dist')
  },

  //自动处理文件的后缀，解决引入包必须添加后缀的问题。
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.join(rootPath, 'src'),
        exclude: path.join(rootPath, 'node_modules')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};
