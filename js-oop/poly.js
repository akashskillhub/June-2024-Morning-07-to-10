class dummy {
    getData() {
        console.log("dummy getData")
    }
}

class test extends dummy {
    getData() {
        console.log("test getData")
    }
}
const x = new test()
x.getData()
