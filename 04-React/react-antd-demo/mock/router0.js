const express = require('express')
const router = express.Router()
router.get('/api/list', (req, res, next) => {
    res.send([
        {
            name: '小米123',
            age: 18,
            genter: '男'
        },
        {
            name: '小米1',
            age: 182,
            genter: '男'
        },
        {
            name: '小米2',
            age: 182,
            genter: '男'
        }
    ])
    next()
})
module.exports = router