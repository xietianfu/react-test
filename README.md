## 说明

这是一个 webpack4 配置练习，希望用来构建出桌面端和移动端的开发环境

## 功能点

1.  配置文件按照环境分离。 完成
2.  配置 react 基础环境。 完成
3.  配置热加载和增量更新。 完成
4.  配置 babel 兼容到 IE8。
5.  配置 less。
6.  配置 react-router，redux。
7.  配置 mock。
8.  配置 JSDoc。
9.  配置 ESLint。
10. 配置 antd。
11. 配置 vscode 的 setting。

## 注意点

### 配置

1.  指定环境的方式可以直接修改为：

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
