// 创建 koa 对象

const Koa = require('koa')
const app = new Koa()
app.use((ctx) => {
  console.log(ctx.request.url)
  ctx.response.body = 'Hello world'
})
app.listen(3000)