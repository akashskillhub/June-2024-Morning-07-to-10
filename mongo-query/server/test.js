const insertedUser = [
    { _id: 1, name: "john" },
    { _id: 2, name: "ross" },
    { _id: 3, name: "kate" },
]

const projectdata = [
    {
        "title": "E-commerce App",
        "description": "An e-commerce platform built with MERN stack"
    },
    {
        "title": "Social Media App",
        "description": "A social media platform with real-time chat"
    },
    {
        "title": "test",
        "description": "A social media platform with real-time chat"
    }
]

const x = projectdata.map((item, i) => {
    return { ...item, userId: insertedUser[i]._id }
})

console.log(x)
