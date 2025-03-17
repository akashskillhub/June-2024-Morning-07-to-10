// 1 .... 15

// 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 

for (let i = 1; i <= 15; i++) {
    // console.log(i)
    if (i % 3 === 0) {
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);

    }
}