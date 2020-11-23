const express = require('express')
const Router = express.Router()

// 登陆
Router.get('/api/login', (req, res) => {
    res.header = 123
    res.send('登陆了!')
})

module.exports = Router