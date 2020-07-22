# uni-app

## 环境搭建
- 安装 HBuildreX  安装App开发版
- 安装微信开发者工具 
- 要HBuildre 运行项目在 微信开发者工具  要开启 微信小程序开发工具的 设置 --> 安全设置 --> 开启端口号

## 目录和项目结构
- 一个uni-app工程 默认包含如下目录及文件
```
┌─components            uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─hybrid                存放本地网页的目录
├─platforms             存放各平台专用页面的目录
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─wxcomponents          存放小程序组件的目录，详见
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，
└─pages.json            配置页面路由、导航条、选项卡等页面类信息，
```
> 注意: <br/>
> 1. static 目录下的 js 文件不会被编译，如果里面有 es6 的代码，不经过转换直接运行，在手机设备上会报错。
> 2. css、less/scss 等资源同样不要放在 static 目录下，建议这些公用的资源放在 common 目录下。 
> 3. HbuilderX 1.9.0+ 支持在根目录创建 ext.json sitemap.json 文件。