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

mongoose.connect(config.mongodb, { useNewUrlParser: true }, err => {
    if (err) {
        console.log(`[MongoDB] Failed to connect. ${err}`)
    } else {
        console.log(`[MongoDB] connected: ${config.mongodb}`)

      

    }
})

//heroku env port
const port = process.env.PORT || 8080
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running on port " + port)
})

module.exports = app
