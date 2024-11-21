const multer = require("multer")

const heroStorage = multer.diskStorage({
    filename: (req, file, next) => {
        next(null, "1.png")
    },
    destination: (req, file, next) => {
        next(null, "test")
    }
})
//                                                          👇 same as formik.values.hero in Blogs.jsx
exports.upload = multer({ storage: heroStorage }).single("hero")