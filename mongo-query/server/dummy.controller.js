const dummy = require("./_seeder/dummy")

exports.getData = async (req, res) => {
    try {
        // const result = await dummy.find({ active: true }).select("name")
        // const result = await dummy.find({ name: "abc" }).select("name")
        // const result = await dummy.findOne({ name: "abc" })
        // const result = await dummy.find({ gender: "male", active: false })
        // const result = await dummy.find({ age: { $lt: 22 } })
        // const result = await dummy.find({ age: { $gt: 20, $lte: 25 } })
        // const result = await dummy.find({
        //     gender: "male",
        //     budget: { $gt: 5000 },
        //     active: true
        // }).select("name mobile")

        // const result = await dummy.find({
        //     skills: { $in: ["angular", "react"] }
        // }, { name: 1, skills: 1 })
        // const result = await dummy.find({
        //     $and: [{ skills: "angular" }, { skills: "react" }]
        // }, { name: 1, skills: 1 })

        /*
                male
                active
                budget > 1000 budgte < 10000
                age < 30
                skills html or css or react
        
                name mobile
        */
        // const result = await dummy.find({
        //     gender: "male",
        //     active: true,
        //     budget: { $lte: 10000, $gt: 1000 },
        //     age: { $lt: 30 },
        //     skills: { $in: ["html", "css", "react"] }
        // })

        // const result = await dummy
        //     .find({
        //         skills: { $in: ["angular"] },
        //         age: { $lte: 30, $gte: 20 }
        //     })
        //     .select("name gender budget")


        // const result = await dummy.find({ active: true })
        // const result = await dummy.aggregate([
        //     { $match: { active: true } },
        //     { $count: "total" }
        // ])
        // const result = await dummy.aggregate([
        //     { $match: { active: true } },
        //     // { $group: { _id: "$gender", kahihi: { $push: "$name" } } }
        //     {
        //         $group: {
        //             _id: "$gender",
        //             kahihi: { $push: "$$ROOT" },
        //             count: { $sum: 1 }
        //         }
        //     }
        // ])

        // const result = await dummy.aggregate([
        //     { $group: { _id: "$age", users: { $push: "$$ROOT" } } }
        // ])
        const result = await dummy.aggregate([
            { $unwind: "$skills" },
            { $group: { _id: "$skills", count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ])
        const genderResult = await dummy.aggregate([
            { $group: { _id: "$gender", count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ])
        const accountResult = await dummy.aggregate([
            { $group: { _id: "$active", count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ])

        res.json({
            message: "fetch success",
            result,
            genderResult,
            accountResult
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong", })
    }
}

exports.getLookupData = async (req, res) => {
    try {
        const result = await dummy.aggregate([
            {
                $lookup: {
                    from: "projects",
                    localField: "_id", // from dummy 
                    foreignField: "userId",// from project 
                    as: "kahipn"
                }
            },
            {
                $group: {
                    _id: "$_id",
                    total: { $sum: 1 },
                    pro: { $push: "$kahipn" }
                }
            }
        ])
        res.json({ message: "fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}