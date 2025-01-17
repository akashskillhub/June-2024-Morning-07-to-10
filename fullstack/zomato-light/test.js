const cart = [
    { _id: 1, name: "abc", qty: 2, price: 50 },// abc
    { _id: 2, name: "xyz", qty: 2, price: 25 },
]

const x = cart.map(item => {
    return { dish: item._id, qty: item.qty }
})

console.log({
    resutrant: "1231",
    items: x
})



