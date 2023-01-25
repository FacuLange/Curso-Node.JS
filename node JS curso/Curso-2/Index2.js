/*const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
const read = fs.createReadStream('./Static/Index.html')
read.pipe(res)
})

server.listen(3000)
console.log("Server on port 3000")

*/
const express = require('express')
const app = express()

console.log('Server on Port 3000')
app.get('/', (req, res) => {
    res.end('Hola Mundo')
})
app.get('/Facu', (req, res) => {
    res.end('Hola Facu')
})
app.get('/Ubicacion', (req, res) => {
    res.end('Capital Federal')
})
app.use((req, res) => {
    res.send ('No se encontro tu pagina')
})















app.listen(3000)