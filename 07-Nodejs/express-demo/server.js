const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen( 8975, () => {
    console.log('Server is runing at http://localhost:8975')
})