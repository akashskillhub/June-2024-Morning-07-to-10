const multer = require("multer")
const path = require("path")

const blogStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        const fn = Date.now() + path.extname(file.originalname)
        cb(null, fn)
    },
    // destination: (req, file, cb) => {
    //     cb(null, "test")
    // }
})

exports.upload = multer({ storage: blogStorage }).single("hero")
// module.exports = upload