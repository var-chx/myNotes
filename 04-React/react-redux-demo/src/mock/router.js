const express = require('express')
const Router =  express.Router()
Router.get('/api/list', (req, res) => {
  res.send([
    '早上8点开会redux',
    '9点需求讨论',
    '晚上5点对接 代码 review'
  ])
})
module.exports = Router