const http = require('http')
const dateFormat = require('dateformat')
const argv = require('minimist')(process.argv.slice(2))
const interval = argv.i
const timeOut = argv.t
const port = 3000


http.createServer((request, response) => {

    const loger = setInterval(() => {
        console.log(dateFormat(new Date(), 'UTC: dd.mm.yyyy, HH:MM:ss'))
    }, interval)

    setTimeout(() => {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(`<h1>${dateFormat(new Date(), 'UTC: dd.mm.yyyy, HH:MM:ss')}</h1>`)
        response.end()
        clearInterval(loger)
    }, timeOut)

}).listen(port)

console.log(`Server is listening on ${port}`)