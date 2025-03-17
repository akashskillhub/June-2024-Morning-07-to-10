class student {
    constructor(name, edu, mobile) {
        this.x = name
        this.y = edu
        this.z = mobile
    }

    city = "london"

    getData() {
        const tt = "dummy"
        return `name :${this.x} edu: ${this.y} mobile: ${this.z} ${this.city} ${tt}`
    }
}


const stud1 = new student("john", "btech", "9988774455")
const stud2 = new student("ross", "bca", "6655448899")

console.log(stud1.getData());
console.log(stud2.getData());
