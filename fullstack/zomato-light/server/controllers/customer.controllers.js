const asyncHandler = require("express-async-handler")
const axios = require("axios")
const { checkEmpty } = require("../utils/checkEmpty")
const Customer = require("../models/Customer")
const Resturant = require("../models/Resturant")
const Menu = require("../models/Menu")
exports.getLocation = asyncHandler(async (req, res) => {
    const { latitude, longitude } = req.body
    const { isError, error } = checkEmpty({ latitude, longitude })
    if (isError) {
        return res.status(400).json({ message: "all fields required", error })
    }
    const { data } = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${process.env.CAGE_API_KEY}`)

    let str = ""
    let city = data.results[0].components.city
    str += data.results[0].components.road
    str += " " + data.results[0].components.neighbourhood
    str += " " + data.results[0].components.suburb
    str += " " + data.results[0].components.city
    str += " " + data.results[0].components.postcode

    res.json({
        message: "location fetch success", result: {
            address: str,
            city
        }
    })

})
exports.updateCustomerInfo = asyncHandler(async (req, res) => {
    const { address, city, gender } = req.body
    const { isError, error } = checkEmpty({ address, city, gender })
    if (isError) {
        return res.status(400).json({ message: "all fields required", error })
    }
    const result = await Customer.findByIdAndUpdate(req.user, {
        address,
        city,
        gender,
        infoComplete: true
    }, { new: true })

    res.json({ message: "profile update sucess", result })

})
exports.getResturants = asyncHandler(async (req, res) => {
    const result = await Resturant
        .find({ isActive: true })
        .select("-password -createdAt -updatedAt -__v -certificate -infoComplete -isActive")
    res.json({ message: "resturant fetch sucess", result })
})
exports.getResturantMenu = asyncHandler(async (req, res) => {
    const result = await Menu.find({ resturant: req.params.rid }).select("-createdAt -updatedAt -__v")
    res.json({ message: "menu fetch sucess", result })
})