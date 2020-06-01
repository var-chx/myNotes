# webpack4.0
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
      new HtmlWebpackPlugin({template: './src/index.html'})  // 插件都是 new出来的
    ]
  }
}
module.exports = config
```

## 二. 跨域代理问题(http-proxy)
```
devServer: {
  proxy: {
    '/api': 'http://www.org.com:3000'  // 此时 访问 '/api/user' 就是 'http://www.org.com:3000/api/user'
  },

  proxy: {
    '/api': 'http://www.org.com:3000'  // 此时 访问 '/api/user' 就是 'http://www.org.com:3000/user'
    pathRewrite: {
      '/api': ''  // 意思就是重写了api
    }
  }

  proxy: {
    '/api': 'http://www.org.com:3000'  // 此时 访问 '/api/user' 就是 'http://www.org.com:3000/v2/user'
    pathRewrite: {
      '/api': 'v2'  // 意思就是重写了api
    }
  }
}

```
## 三. 关于环境变量的问题
## 四. 关于webpack的优化
 1. 有些第三方的包没有依赖 就可以忽略依赖检测  配置方法 使用 noParse 
 2. 使用loader 时 用
 3. 使用多线程打包  happyPack 方法 包裹下 loader 在插件中 new 出来 用 id对应关联起来
 4. (webpack自带的优化) tree-shaking 用import 引入 而不要用 require  以为 import 用了 tree-shaking 把没用的代码自动删除 比如 
 ```
 import fn1 from './fn.js'
 // fn.js 中包含了多个方法 如 fn1 ,fn3, ...
 // 但是 我们项目中只引用的 fn1  则 打包时代码中只会包含 fn1 的方法
 ```
 5. (webpack自带的优化)scope hosting(作用域提升)
 ```
 var a = 1
 var b = 2
 var c = 3
 var d = a + b + c
 console.log(d) 
 // 此段代码很啰嗦 webpack会自动帮我们简化代码
 ```
 6. 如果是多入口的话 可以考虑抽离公共模块
 ```
  entry: { // 此时就定义了两个入口文件
    index: './src/index.js',
    other: './src/other.js'
  },
  optimization: {
    splitChuncks: { // 分割代码块
      cacheGroups: { // 缓存组
        common: {             // 公共的缓存 里边可以配置缓存策略
          chuncks: 'intiial'     // 从入口处抽离
          minSize: 0,            // 最小这么大的就要抽离了
          minChuncks: 2,         // 被引用了2次就要抽离了
        },
        vender: {             // 第三方的
          priority: 1,           // 优先级  此时就会先抽离 vender 再抽离 common
          test: /node_modules/,  // 正则  把这个文件夹里的抽离出来
          chunks: 'initial',
          minSize: 0,
          minChuncks: 2
        }

      }
  

    }
  }
 ```
 7. 关于懒加载
  vue和react中的懒加载实现都是依靠这个功能
  实现原理 
 ```
 // 给一个按钮注册点击事件
 button.addEventListener('click', () => {
   // 这个是草案的语法 需要安装插件  @babel/plugin-syntax-dynamic-import 获取支持
   import('./source.js').then(data => {
     console.log(data.default)
   })
   // 这样是实现了 点击按钮的时候动态的加载 ./source.js 的资源
 })
 ```


