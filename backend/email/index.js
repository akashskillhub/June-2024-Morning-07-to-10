const express = require("express")
require('dotenv').config()

const app = express()
app.use(express.json())
app.use('/api/auth', require("./routes/auth.routes"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "route not found" })
})

app.listen(process.env.PORT, console.log("server running"))