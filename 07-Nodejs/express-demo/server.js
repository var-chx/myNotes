const express = require('express')
const app = express()
const Router = require('./routers')
const mongoose = require('mongoose');

app.use(express.urlencoded({extended: true})) // 请求体参数是: name=tom&pwd=123
app.use(express.json()) // 请求体参数是json结构: {name: tom, pwd: 123}

app.use('/', Router)
mongoose.connect('mongodb://localhost/my_app', {useNewUrlParser: true})
.then(() => {
    console.log('数据库连接成功')
    app.listen( 8975, () => {
        console.log('Server is runing at http://localhost:8975')
    })
});
