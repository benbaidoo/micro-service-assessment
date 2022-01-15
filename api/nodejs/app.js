const express = require('express')
const controller = require('./controller')

const app = express()
app.use(express.json())

app.get('/people', controller.getPeople)
app.use(controller.errorRoute)

module.exports = app