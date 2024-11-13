const obj = {
    name: "ross",
    dd: () => {
        return "dell"
    }
}
const dummy = () => obj

const { x: dd } = dummy()
// console.log(x)
// console.log(x)


// 1 ross   // 3
// 2 dell   // 2
// 3 () => { return "dell" }
// 4 dummy function
// 5 undefind // 6
//  none 2


