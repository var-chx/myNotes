const express = require('express')
const router = require('./router')
const app = express()
app.use('/', router)
app.listen(3100, () => {
    console.log('项目启动了监听 3100 端口')
})