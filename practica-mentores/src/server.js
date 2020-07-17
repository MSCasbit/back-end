

const express = require('express')
const app = express()
const kodersRouter = require('./routes/koders')
const mentorRouter = require('./routes/mentors')

app.use(express.json())

app.use('/koders', kodersRouter)

app.use('/mentors', mentorRouter)



module.exports = app