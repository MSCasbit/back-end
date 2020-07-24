//forma corta y mas usada

require('dotenv').config()

// forma larga 
//const dotenv = require('dotenv')
//dotenv.config()

const dbConnect = require('./src/lib/db')
const server = require('./src/server')



dbConnect()
.then(() => {
    console.log('DB connected')
    server.listen('8080', () => {
        console.log('server is listening')
    })
})
.catch(error => {
    console.log('Error:', error)
})