let x = 10, y = 20, z = 30
if (x > y && x > z) {
    console.log(x)
} else if (y > x && y > z) {
    console.log(y)
} else {
    console.log(z)
}

const arr = [10, 20, 30, 5]
let large = 0
for (let i = 0; i < arr.length; i++) {
    if (large < arr[i]) {
        large = arr[i]
    }
}
console.log(large)

large = 0
for (const item of arr) {
    if (large < item) {
        large = item
    }
}
console.log(large)


let p = 10, q = 20, r = 30
console.log(p + q + r)

let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)
sum = 0
for (const item of arr) {
    sum += item
}
console.log(sum)

