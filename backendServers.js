const http = require('http');
const serverConfig = require("./config.json").severs

const creatServer = (host, port) => {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end(`Server response from ${port}`)        
    }).listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}`)
    })
} 

serverConfig.forEach(server => creatServer(server.host, server.port))