
const dbConnect = require('./src/lib/db')
const server = require('./src/server')


dbConnect()
.then(() => {
    console.log('DB connected')
    server.listen('8181', () => {
        console.log('server is listening')
    })
})
.catch(error => {
    console.log('Error:', error)
})