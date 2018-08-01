## 说明

这是一个 webpack4 配置练习，希望用来构建出桌面端和移动端的开发环境

## 功能点

- 配置文件按照环境分离。 完成
- 配置 react 基础环境。 完成
- 配置热加载和增量更新。 完成
- 配置 babel 兼容到 IE9。 完成
- 代码分割。
- 配置 less。
- 配置 react-router，redux。
- 配置 mock。
- 配置 JSDoc。
- 配置 ESLint。
- 配置 antd。
- 配置 vscode 的 setting。

## 注意点

### 配置

- 指定环境的方式可以直接修改为：

```javascript
// 原始的指定方式
plugins: [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  });
]

// 修改后的方式
module.exports = {
+ mode: 'development'
- plugins: [
-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
- ]
}
```

- 通过`react-hot-loader`组件配置的热更新，需要关闭掉开发配置文件中 devserver 的`hot`更新。不然不会报`webpack Uncaught RangeError: Maximum call stack size exceeded`。

```javascript
  devServer: {
    contentBase: path.join(rootPath, '/dist')
    // hot: true,
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
```

- 要想让其他电脑访问到本机，需要在`devserver`中添加`hots:'0.0.0.0'`或者本机地址。

- 为了兼容到 IE9，添加了`babel-polyfill`，会导致打包。

- webpack 移除 `lCommonsChunkPlugin`，用 `optimization.splitChunks` 和 `optimization.runtimeChunk` 来代替。通常使用`optimization.splitChunks`。

```javascript
  // 这样并不会分离出包
  optimization: {
    splitChunks: {
    name: 'common'
    }
  },
  // 需要改写成这样
  splitChunks: {
    cacheGroups: {
      commons: {
        name: 'commons',
        chunks: 'initial',
        minChunks: 2
      }
    }
  }
```

## 待确定点

- 是否使用`babel-runtime`保持代码整洁。
