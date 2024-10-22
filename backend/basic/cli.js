const fs = require('fs')
if (process.argv[2] === "create") {
    fs.writeFileSync(process.argv[3], "")
}
if (process.argv[2] === "remove") {
    fs.unlinkSync(process.argv[3])
}
// server

// json-server --w --p 5000 db.json