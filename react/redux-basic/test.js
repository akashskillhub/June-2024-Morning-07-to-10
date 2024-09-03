const root = (x, y) => { }

const obj = {
    demo: (arg) => {
        // console.log("demo")
        root(null, arg)
    }
}
obj.demo(50)
