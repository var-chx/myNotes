# TypeScript 
## 介绍
- TypeScript 是由微软公司在 2012 年正式发布，现在也有 8 年的不断更新和维护了;
- TypeScript 其实就是 JavaScript 的超集，也就是说 TypeScript 是建立在 JavaScript 之上的，最后都会转变成 JavaScript。类似 Sass less
## 安装
```sh
sudo npm i typescript -g or
yarn global add typescript

// 验证
npm view typescript version  
// 查看 typescript 所有可用版本
npm view typescript versions
```
## 使用
```
// index.ts
let str: string = '123'
console.log(str)

// 使用 tsc 执行 生成 js
tsc index.ts => index.js
// 然后使用 node 运行
node index.js
```
## 直接全局安装 ts-node 执行 ts文件
```
sudo npm i ts-node -g
ts-node index.ts // 123
```
