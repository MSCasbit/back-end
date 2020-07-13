const fs = require('fs')
const express = require('express');
const { response, request } = require('express');
const app = express();
app.use(express.json())
//1. checa el header content type de cada request
//2. si el content type es JSON entonces parsea el contenido como un JSON 
// 3. El JSON resultante nos lo provee en request.body
app.get('/koders',(request, response)=>{
    const k = JSON.parse(fs.readFileSync('./kodemia.json')) // hacerlo una funcion que nos arme el JSON
//ejemplo  k.koders
    const koders = k.koders
    response.json({
        success: true,
        data:{
            koders    //o puedo poner koders:koders pero se hace de la otra manera para hacermas corto el codigo
        }
    })
})
// POST /koders
app.post('/koders', (request , response) =>{
    console.log ('request body', request.body)
    const kodemia = JSON.parse(fs.readFileSync('./kodemia.json'))
    console.log('kodemia', kodemia)
    kodemia.koders.push(request.body)
    const jsonAsString = JSON.stringify(kodemia,'\n',2 )
    fs.writeFileSync('./kodemia.json', jsonAsString)
    response.json({
        success:true,
        data: kodemia.koders
    })
})
//uri params
app.delete('/koders/:name', (request, response)=>{
    const name = request.params.name
    const kodemia = JSON.parse(fs.readFileSync('./kodemia.json'))
    const filteredKoders = kodemia.koders.filter((koder)=>{
        return koder.name !== name
    })
    kodemia.koders = filteredKoders
    const jsonAsString = JSON.stringify(kodemia,'\n',2 )  // ESAS LINEAS HACERLAS 
    fs.writeFileSync('./kodemia.json', jsonAsString)   // LINEAS HACERLAS 
    response.json({
        success:true,
        data:{
            filteredKoders
        }
    })
})
app.patch('/koders/:name',(request,response)=>{
    const currentName = request.params.name
    const newName = request.body.name
    const newGender = request.body.gender
    console.log (currentName)  
    const kodemia = JSON.parse(fs.readFileSync('./kodemia.json'))
    const mapKoder = kodemia.koders.map((koder) => {
        if (currentName === koder.name){ 
            const name = newName || koder.name 
            const gender = newGender ? newGender : koder.gender
            return {
                name, 
                gender
            }
        }
        return koder
    })
    kodemia.koders = mapKoder
    const jsonAsString = JSON.stringify(kodemia,'\n',2 )  
    fs.writeFileSync('./kodemia.json', jsonAsString)   
    response.json({
        success: true,
        data: mapKoder
    })
   // 
})
app.listen(8080, () => {
    console.log("El servidor está inicializado en el puerto 8080");
})