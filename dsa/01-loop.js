
for (let i = 0; i < 10; i = i + 2) {
    console.log(i) // 02468
}
// control + k
// q

let x = 10
while (x < 10) {
    console.log(x)
    x++
}

let y = 10
do {
    console.log(y)
    y++
} while (y < 10)

const arr = ["dell", "hp", "apple"]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

let j = 0
while (j < arr.length) {
    console.log(arr[j])
    j++
}

let k = 0
do {
    console.log(arr[k])
    k++
} while (k < arr.length)


for (const item of arr) {
    console.log(item)
}