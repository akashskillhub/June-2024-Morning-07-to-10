const cart = [
    { _id: 1, name: "abc", qty: 1 },// abc
    { _id: 2, name: "xyz", qty: 1 },
]
// if (cart[0]._id === 1) {
//     qty++
// }
const payload = 1
const x = cart.find(item => item._id === payload)
x.qty = x.qty + 1
console.log(x)
console.log(cart)

