let x = 11
console.log(x / 2)
console.log(x % 2)

if (x % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}

const arr = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}

for (const item of arr) {
    if (item % 2 !== 0) {
        console.log(item)
    }
}