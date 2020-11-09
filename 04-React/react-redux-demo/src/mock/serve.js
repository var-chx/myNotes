const express = require('express')
const Router = require('./router')
const app = express()
app.use('/', Router)
app.listen(3100, () => {
  console.log('后台服务启动了')
})