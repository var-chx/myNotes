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
 1. 有些第三方的包没有依赖 就可以忽略依赖检测  配置方法

# Vue cli 3.0

## 一. 关于环境变量和模式
### 1. 你可以替换项目根目录的下列文件来指定环境变量:
```
.env              # 会在所有的环境中被载入
.env.local        # 会在所有的环境中被载入  但是会被 git 忽略
.env.[mode]       # 只在指定的模式中被载入
.env.[mode].local # 只在指定的模式中被载入  但是会被 git 忽略
```
### 2. 模式是Vue cli 项目中的一个重要的概念 默认情况下一个Vue cli 项目有三个模式
 - development 模式用于 vue-cli-service serve
 - production 模式用于 vue-cli-service build 和 vue-cli-service test:e2e
 - test 模式用于 vue-cli-service test:unit

注意模式不同于 NODE_ENV，一个模式可以包含多个环境变量。也就是说，每个模式都会将 NODE_ENV 的值设置为模式的名称——比如在 development 模式下 NODE_ENV 的值会被设置为 "development"。

你可以通过为 .env 文件增加后缀来设置某个模式下特有的环境变量。比如，如果你在项目根目录创建一个名为 .env.development 的文件，那么在这个文件里声明过的变量就只会在 development 模式下被载入。

你可以通过传递 --mode 选项参数为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量，请在你的 package.json 脚本中加入：
```
"dev-build": "vue-cli-service build --mode development",
```
具体的例子: Staging模式

 - 假设我们有一个应用包含以下 .env 文件：
```
VUE_APP_TITLE=My App
```
和 .env.staging 文件：
```
NODE_ENV=production
VUE_APP_TITLE=My App (staging)
```
  - vue-cli-service build 会加载可能存在的 .env、.env.production 和 .env.production.local 文件然后构建出生产环境应用；

  - vue-cli-service build --mode staging 会在 staging 模式下加载可能存在的 .env、.env.staging 和 .env.staging.local 文件然后构建出生产环境应用。

这两种情况下，根据 NODE_ENV，构建出的应用都是生产环境应用，但是在 staging 版本中，process.env.VUE_APP_TITLE 被覆写成了另一个值。

## 3. 关于 .env 文件的位置(放在自己项目的根目录)和格式如下
```
# just a flag 
# 这里的注释 用 #
# VUE_APP 开头的 在客户端环境中可以 比如可以再组件中用js访问  process.env.VUE_APP_*
ENV = 'development'  // 只能在构建是使用

BASE_API = '/dev-api'

VUE_APP_BASE_API = '/dev-api'

```
除了 VUE_APP_* 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：

  - NODE_ENV - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。
  - BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。






