const arr = [
    { cause: "salary", amount: 25000, type: "credit" },
    { cause: "rent", amount: 5000, type: "credit" },
    { cause: "petrol", amount: 5000, type: "debit" },
    { cause: "sip", amount: 15000, type: "debit" },
]

let creditAmount = 0, debitAmout = 0
for (const item of arr) {
    if (item.type === "credit") {
        creditAmount += item.amount
    } else {
        debitAmout += item.amount
    }
}
console.log(creditAmount)
console.log(debitAmout)



// const x = arr.reduce((sum, item) => {
//     if (item.type === "credit") {
//         sum = sum + item.amount
//     }
//     return sum
// }, 0)

// const y = arr.reduce((sum, item) => {
//     if (item.type === "debit") {
//         sum = sum + item.amount
//     }
//     return sum
// }, 0)
// console.log(x);
// console.log(y);
