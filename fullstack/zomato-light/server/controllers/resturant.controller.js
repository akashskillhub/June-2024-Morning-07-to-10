const asyncHandler = require("express-async-handler")
const upload = require("../utils/upload")

exports.updateInfo = asyncHandler(async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "multer error" })
        }
        // cloudinary
        console.log(req.user)
        console.log(req.body) // json
        console.log(req.files) // fileds array
        res.json({ message: "info update" })
    })
})  