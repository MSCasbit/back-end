
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('NOS MANDARON A LLAMAR WIII :D')
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })

    console.log('metodo', request.method)
    if (request.url === '/adios') {
        response.write('<h1>ADIOS!</h1>')
    }
    else if (request.method === 'GET') {
        response.write('<h1>THIS MAKE WITH GET</h1>')
    } else if (request.method === 'POST') {
        response.write('<h1>THIS MAKE WITH POST</h1>')
    } else {
        response.write('<h1>HELLO WORLD FROM NODE SERVER</h1>')
        response.write('<h3>HELLO WORLD FROM NODE SERVER</h3>')
    }
    response.end()

})

server.listen('8080', () => {
    console.log('el servidor esta escuchando')
})
