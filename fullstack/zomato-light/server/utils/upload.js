const multer = require("multer")

const storage = multer.diskStorage({
    filename: (req, file, cb) => { cb(null, file.originalname) },
})
const resturantUpload = multer({ storage }).fields([
    { name: "certificate", maxCount: 1 },
    { name: "hero", maxCount: 1 },
])

const menuUpload = multer({ storage }).array("image")
const updateMenuUpload = multer({ storage }).single("image")
const riderUpload = multer({ storage }).fields([
    { name: "licence", maxCount: 1 },
    { name: "rc", maxCount: 1 }
])
module.exports = { resturantUpload, menuUpload, updateMenuUpload, riderUpload }