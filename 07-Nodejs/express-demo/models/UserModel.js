const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    password: { type: String, required: true},
    phone: String,
    email: String,
    create_time: { type: Number, default: Date.now},
    role_id: String
})
const UserModel = mongoose.model('users', userSchema)

UserModel.findOne({userName: 'admin'}).then(user => {
    if (!user) {
        UserModel.create({
            username: 'admin',
            password: 'admin'
        }).then(user => {
            console.log('初始化了用户')
        })
    }
})

module.exports = UserModel