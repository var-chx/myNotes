const express = require('express')
const app = express()
const Router = require('./routers')

app.use('/', Router)

app.listen( 8975, () => {
    console.log('Server is runing at http://localhost:8975')
})