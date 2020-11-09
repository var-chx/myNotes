const express =require('express')
const app = express()
const router = require('./router')
const router0 = require('./router0')
app.use('/', router)
app.use('/index', router0)
// app.get('/', (req, res) => {
//     res.send([
//         {name: 123}
//     ])
// })
app.listen(3100, () => {
    console.log('服务启动的 监听 localhost:3100')
})