const mongoose = require("mongoose")
const fs = require("fs")
const dummy = require("./dummy")
const Project = require("./Project")
mongoose.connect("mongodb://localhost:27017/dummy")

const addData = async () => {
    try {
        await deleteData()

        const result = fs.readFileSync("./data.json")
        const data = JSON.parse(result)
        const insertedUsers = await dummy.create(data)

        const projectFile = fs.readFileSync("./projectdata.json");
        let projectData = JSON.parse(projectFile);

        projectData = projectData.map((project, index) => ({
            ...project,
            userId: insertedUsers[index % insertedUsers.length]._id,
        }));

        await Project.create(projectData)

        console.log("data added")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit()
    }
}
const deleteData = async () => {
    try {
        await dummy.deleteMany()
        await Project.deleteMany()
        console.log("data removed")
        // process.exit()
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

mongoose.connection.once("open", () => {
    console.log("db connected")

    if (process.argv[2] === "add") {
        addData()
    } else if (process.argv[2] === "del") {
        deleteData()
    } else {
        console.log(`use node seeder.js add to add data to database`)
        console.log(`use node seeder.js del to remove data from database`)
        process.exit()

    }

})