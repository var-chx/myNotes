const express = require('express')
const Router = express.Router()
const UserModel = require('../models/UserModel')

// 登陆
Router.post('/api/login', (req, res) => {
    UserModel.findOne({userName: 'admin'})
    .then(user => {
        res.send(user)
    })
})

module.exports = Router