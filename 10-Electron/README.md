# Electron 笔记
## 介绍
- github 开发的开源框架
- 用 web 前端技术 开发桌面应用
- Electron = chromium(提供UI能力) + node.js(底层能力:文件读写等; 可以使用npm包) + native API(桌面端跨平台原生的能力)

## 快速开始 hello world
```
# 克隆示例项目的仓库
$ git clone https://github.com/electron/electron-quick-start

# 进入这个仓库
$ cd electron-quick-start

# 安装依赖并运行
$ npm install && npm start
```

## vue-cli 3.0 + electron-vue 开发环境搭建
```
1. vue create my-project

2. vue add electron-builder

3. npm run electron:serve

4. npm run electron:build 
```

## Electron 的进程
- 渲染进程
    - 用户看到的web界面就是由渲染进程描绘出来的 包括 html css js 
    - 可以有多个渲染 打开几个界面就是一个渲染进程
- 主进程
    - Electron 运行的 package.json 的 main 脚本的进程就是主进程,在主进程中运行的脚本通过创建 web 页面来展示用户界面, 
    - 一个Electron应用总是有且只有一个主进程

## 使用 node 的 fs 模块
```js
fs = require('fs')
fs.readFile('text.txt', 'utf8', (err, data) => {
    console.log(data)
})
```