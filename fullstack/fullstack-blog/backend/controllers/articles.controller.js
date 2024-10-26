const Articles = require("../models/Articles")

/*
    get         => find
    add         => create
    update      => findByIdAndUpdate
    delete      => findByIdAndDelete
*/
exports.getAllArticles = async (req, res) => {
    const result = await Articles.find()
    res.json({ message: "article fetch success", result })
}

exports.addArticle = async (req, res) => {
    await Articles.create(req.body) // requires body parser 
    res.json({ message: "article create success" })
}

exports.updateArticle = async (req, res) => {
    //      👇 from artilce.route.js
    const { blogId } = req.params
    await Articles.findByIdAndUpdate(blogId, req.body) // requires body parser 
    res.json({ message: "article udpate success" })
}


exports.deleteArticle = async (req, res) => {
    //      👇 from artilce.route.js
    const { blogId } = req.params
    await Articles.findByIdAndDelete(blogId)
    res.json({ message: "article Delete success" })
}

