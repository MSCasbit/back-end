
const express = require('express')
const { response } = require('express')

const app = express()

//GET
//POST
//PUT
//DELETE
//PATCH

//ENDPOINT
app.get('/hola', (request, response) => {
 response.write('HOLA MUNDO')
 response.end()
})

app.post('/hola', (request, response) => {
    response.write('HOLA Koders')
    response.end()
})

app.listen(8080,() => {
    console.log('The server is ready')
})

