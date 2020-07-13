
const express = require("express")
const fs = require("fs")
const { response } = require("express")
const app = express()

app.get('/products',(request, response) => {
   response.json({
       sucess : true,
       message : "hasta aqui me quede"
   })
})
app.post('/products', (request, response) => {
    response.json({
        succes :true,
        message : "hola mundo con un post"
    })
})



app.listen("8080", () => {
    console.log ("El servidor esta escuchando")
})
