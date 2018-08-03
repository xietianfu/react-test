## 说明

这是一个 webpack4 配置练习，希望用来构建出桌面端和移动端的开发环境

## 功能点

- 配置文件按照环境分离。 完成
- 配置 react 基础环境。 完成
- 配置热加载和增量更新。 完成
- 配置 babel 兼容到 IE9。 完成
- 代码分割。 完成
- 业务代码动态加载。 完成
- 配置 less。 完成
- 配置 react-router，redux。完成
- 配置 mock。
- 配置 JSDoc。
- 配置 ESLint。 完成
- 配置 antd。 完成
- 配置 vscode 的 setting。
- 动态引入`polyfill`。 完成

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

- webpack 移除 `lCommonsChunkPlugin`，用 `optimization.splitChunks` 和 `optimization.runtimeChunk` 来代替。通常使用`optimization.splitChunks`。将`commons`中的 chunk 改写成`all`会自动的生成很多的包，不需要手动进行拆分，但是整个构建后的体积大小是差不多的。

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

- 如果 webpack 的配置不在根目录，在配置`CleanWebpackPlugin`时需要如下配置，不然会导致在构建时导致`clean-webpack-plugin: D:\01-code\learn\webpack4\dist is outside of the project root. Skipping...`

```javascrip
  // webpack文档方式配置
  const rootPath = path.resolve(__dirname, '..');
  new CleanWebpackPlugin([path.join(rootPath,'dist')]);

  // 需要改写的方式
  new CleanWebpackPlugin(['dist'], {
    root: rootPath,
    verbose: true,
    dry: false
  })
```

- 使用了新的代码分割方式后，不用再引用`HashedModuleIdsPlugin`这个插件来防止未改变的静态文件生成不同的`chunkhash`了。

- 如果项目在内网使用同时需要考虑到兼容性，需要在 entry 中添加`babel-polyfill`。如果不许在在内网使用，在模板网页中添加`<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>`动态的引入 polyfill。

- webpack 2.0 开始原生支持 `ES Module`，也就是说不需要 `babel` 把 `ES Module` 转换成曾经的 `commonjs` 模块了，想用上 `Tree Shaking`，请务必关闭 babel 默认的模块转义。

- 如果你的一个模块在 package.json 中说明了这个模块没有副作用（也就是说执行其中的代码不会对环境有任何影响，例如只是声明了一些函数和常量）,那么在引入这个模块，却没有使用它时，webpack 会自动把它 Tree Shaking 丢掉：

```javascript
{
  "name": "your-module",
  "sideEffects": false
}
```

- 支持 `<script type="module">` 的浏览器，必然支持下面的特性。这样在内网应用时，就可以手动添加这个说明来处理是否需要添加`polyfill`。

```javascript
  async/await
  Promise
  Class
  箭头函数、Map/Set、fetch 等等...
```

## 待确定点

- 是否使用`babel-runtime`保持代码整洁。
- svg 图片整合进字体图片。
