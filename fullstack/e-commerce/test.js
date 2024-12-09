const arr = [10, 20]

const x = arr.find(item => item === 30)
// console.log(x)
if (!x) {
    arr.push(30)
}

