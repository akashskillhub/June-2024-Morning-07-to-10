const http = require("http")
const x = http.createServer((req, res) => {

    if (req.method === "GET") {
        // database opration
        res.end(`Todo Fetch Success ${req.url}`)
    } else if (req.method === "POST") {
        res.end("Todo Create Success")
    } else if (req.method === "PUT") {
        res.end("Todo update Success")
    } else {
        res.end("Todo delete Success")
    }
})
x.listen(5000, console.log("app running...."))

// express