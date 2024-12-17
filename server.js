const http = require('http');
const roundRobin = require("./roundRobin")
const serverConfig = require("./config.json").severs

const servers = serverConfig.map(server => ({
    ...server
}))

const server = http.createServer((req, res) => {
    roundRobin(servers, req, res)
})

server.listen(3000, ()=>{
    console.log("Load balner running on port 3000")
})