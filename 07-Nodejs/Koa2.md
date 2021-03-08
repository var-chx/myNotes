# Koa2 框架
## 介绍
- 基于 node.js 的 web 开发框架
- 由 Express 原班人马打造

| 框架名 | 作用 | 异步处理 |
| ---- | ---- | ---- |
| Express | web框架 | 回调函数  |
| Koa  web框架 | Generator yield  |
| Koa2 | web框架 | async / await  |

- 环境依赖 node V7.6.0 及以上
## 特点
- 支持 async / await
- 洋葱模型的中间件

### 中间件的特点
- 使用 use 方法加载中间件
- 一个中间件就是一个函数
- 中间件的执行顺序是符合洋葱模型


