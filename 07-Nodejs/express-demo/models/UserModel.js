const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userName: String,
    passWord: String
})
const UserModel = mongoose.model('users', userSchema)

UserModel.findOne({userName: 'admin'}).then(user => {
    if (!user) {
        UserModel.create({
            userName: 'admin',
            passWord: '123'
        }).then(user => {
            console.log('初始化了用户')
        })
    }
})

module.exports = UserModel