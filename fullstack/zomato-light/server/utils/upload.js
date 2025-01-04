const multer = require("multer")

const storage = multer.diskStorage({
    filename: (req, file, cb) => { cb(null, file.originalname) },
})
module.exports = multer({ storage }).fields([
    { name: "certificate", maxCount: 1 },
    { name: "hero", maxCount: 1 },
])