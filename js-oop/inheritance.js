// 
class user {
    constructor(name, email) {
        this.name = name
        this.email = email
        console.log("user ");
    }
    getData() {
        console.log("user getdata")
    }
}
//             👇 kind of copy
class seller extends user {
    constructor(name, email) {
        super(name, email) // calls constructor of user
    }
}

// const test = new user("john", "john@gmail.com")
const demo = new seller("ross", "ross@gmail.com")
demo.getData()

