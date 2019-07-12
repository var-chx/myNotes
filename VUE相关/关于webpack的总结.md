## 一 . 几个基本的概念
### 1. mode开发模式 
```
// webpack.production.config.js
module.exports = {
  mode: 'production'  // 生产模式 此时压缩代码等  development 为开发模式 此时会开启 sourseMap 
}
```
### 2. 入口文件(entry)
打包的起点 可以是一个 当然也可是多个
```
module.exports = {
  entry: './path/to/my/enrty/file.js'
}
```
### 3. 输出(output) 就是告诉webpack 在哪里输出它所创建的 bundles, 以及如何命名这些文件, 默认值为 ./dist
```
const path = require('path')
module.exports = {
  entry: './path/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
}
```
### 4. loader  webpack 自身只会处理js  所以处理css .vue  等文件就需要各自对应的 loader
```
// 先npm安装 后使用
const path = require('path')
const config = {
  output: {
    filename: 'my-first.js'
  },
  module: {
    rules: [
      {test: /\.txt$/, use: 'raw-loader'}
    ]
  }
}
// “嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先使用 raw-loader 转换一下。”
```
### 5. 插件(plugins)   
说明: loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
```
const HtmlWebpackPlugin = require('html-webpack-plugin') // npm安装后 引用
const webpack = require('webpack')  // 用于访问内置插件

const config = {
  module: {
    rules: [
      {test: /\.txt$/, 'raw-loader'}
    ],
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'})
    ]
  }
}
module.exports = config
```

## 二. 入口起点(entry points)



