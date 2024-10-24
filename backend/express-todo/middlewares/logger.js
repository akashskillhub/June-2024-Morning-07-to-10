const logger = (req, res, next) => {
    let isLogin = true
    console.log("test middleware called")
    if (isLogin) {
        next()
    } else {
        res.send("Please Login")
    }

}
module.exports = logger