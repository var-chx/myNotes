const express = require('express')
const router = express.Router()
router.get('/api/list', (req,res) => {
    res.send([
        '你好',
        '我是你的'
    ])
})
router.get('/api/list0', (req,res) => {
    res.send([
        '你好2',
        '我是你的2'
    ])
})
module.exports = router