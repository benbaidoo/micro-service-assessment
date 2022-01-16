const express = require('express')
const cors = require('cors')
const controller = require('./controller')

const app = express()
app.use(express.json())
app.use(cors({origin: '*'}))

app.get('/people', controller.getPeople)
app.use(controller.errorRoute)

module.exports = app