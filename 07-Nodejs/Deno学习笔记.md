# Deno 运行时 ：Node.js 的替代品

## 1. Deno VS Node

| 类目	|Node |	Deno
| ---- | ---- | ---- |
| API 引用方式 |	模块导入 |	全局对象
| 模块系统 |	CommonJS & 新版 node 实验性 ES Module |	ES Module 浏览器实现
| 安全 |	无安全限制 |	默认安全
| Typescript	第三方，如通过 ts-node 支持 |	原生支持
| 包管理 |	npm + node_modules |	原生支持
| 异步操作 |	回调 |	Promise
| 包分发 |	中心化 npmjs.com |	去中心化 import url
| 入口 |	package.json 配置 |	import url 直接引入
| 打包、测试、格式化 |	第三方如 eslint、gulp、webpack、babel 等 |	原生支持

### 1.1. 内置 API 引用方式不同
- node 模块导入
```js
const fs = require('fs')
fs.readFileSync('./index.json')
```
- deno 全新对象
```js
// Deno则是一个全局对象 Deno 的属性和方法
Deno.readFileSync('./index.json')
```
### 1.2. 模块系统
- node CommonJS 规范

