let x = 10, y = 20
// let z = y
// y = x
// x = z
// console.log(x, y)

x = x + y  // 30
y = x - y // 10
x = x - y // 20
console.log(x, y);

const arr = [10, 20]
// x = arr[0]
// y = arr[1]
arr[0] = arr[0] + arr[1] // [30,20]
arr[1] = arr[0] - arr[1] // [30,10]
arr[0] = arr[0] - arr[1] // [20,10]

// [20, 10]

// prime
// armstrong
// fibbonacci


const brands = ["dell", "hp", "apple", "msi"]
//                0       1      2       3

const swap = (i) => {
    // edge case
    if (i < 1 || i >= brands.length - 1) {
        return "invalid option"
    }
    let temp = brands[i - 1] // hp
    brands[i - 1] = brands[i + 1] // msi
    brands[i + 1] = temp
    return brands
}
console.log(swap(4))
// ["dell","msi","apple","hp",]
