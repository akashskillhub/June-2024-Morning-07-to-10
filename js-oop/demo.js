// OOP
// encapsulation
// polymorphism
// inheritance
// abstraction

// access specifier => private public protected
class demo {
    constructor() {
        console.log("constructor called")
    }
    _x = 10 // private
    getData() {
        console.log("get data called")
    }
    // variables    => propeties
    // functions   => methods
}
//     👇 instance
const test = new demo() // calles constructor
console.log(test.x)
test.getData()
