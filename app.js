var express = require('express')
const config = require('config')
const mongoose = require('mongoose');
const morgan = require('morgan')
const routes = require('./routes')

var app = express()
app.use(express.json())
app.use('/v1', routes)
app.use(morgan('dev'))

console.log('db', config.mongodb)
console.log('apiPort', config.apiPort)

mongoose.connect(config.mongodb, { useNewUrlParser: true }, err => {
    if (err) {
        console.log(`[MongoDB] Failed to connect. ${err}`)
    } else {
        console.log(`[MongoDB] connected: ${config.mongodb}`)

        // start server
        app.listen(process.env.PORT || config.apiPort, () => {
            console.log(`[Server] listening on port ${config.apiPort}`)
        })

    }
})
module.exports = app
