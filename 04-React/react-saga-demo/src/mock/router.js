const express = require('express')
const router = express.Router()
router.get('/api/list', (req,res) => {
    res.send([
        '你好',
        '我是你的'
    ])
})
module.exports = router