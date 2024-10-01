const x = [
    { id: 1, date: "2024-09-25", desc: "test 1" },
    { id: 2, date: "2024-09-26", desc: "test2" },
    { id: 3, date: "2024-09-27", desc: "test3" },
    { id: 4, date: "2024-09-27", desc: "test4" },
]

const y = x.filter(item => item.date === "2024-09-25")
console.log(y);
