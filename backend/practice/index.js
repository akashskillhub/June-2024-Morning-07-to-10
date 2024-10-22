const http = require("http")

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        console.log("GET Request Recived")
        res.end("Todo Fetch Success")
    } else if (req.method === "POST") {
        console.log("POST Request Recived")
        res.end("Todo Create Success")
    }
})

server.listen(5000, console.log("SERVER RUNNING ON 5000"))