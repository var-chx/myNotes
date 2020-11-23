const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./models/UserModel')
const app = express()
app.get('/', (req, res) => {
    UserModel.findOne({userName: 'admin'}).then(user => {
        res.send(user)
    })
    

})
mongoose.connect('mongodb://localhost/my_mongodb', {useNewUrlParser: true})
.then(() => {
    console.log('连接数据库成功!!!')
    app.listen(8083, () => {
        console.log('Server is running at http://localhost:8083')
    })
})
