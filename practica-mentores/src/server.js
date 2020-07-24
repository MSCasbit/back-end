

const express = require('express')
const app = express()
const kodersRouter = require('./routes/koders')
const mentorRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')

app.use(express.json())

//middleware a mivel de aplicacion 
// app.use(function(request, response, next))
// app.use(...function) recibe una o mas funciones 

app.use((request, response, next) => {
    console.log('middleware de aplicaion')
     next()
    },(request, response, next) => {
        console.log('middleware 2')
        request.mau = 'hola soy mau' 
        next()
    },(request, response, next) => {
        console.log('middleware 3:', request.mau)
         next()
        })
    

app.use('/koders', kodersRouter)

app.use('/mentors', mentorRouter)

app.use('/auth', authRouter)



module.exports = app