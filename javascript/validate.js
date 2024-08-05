import { isEmpty } from "./checkEmpty.js"
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const age = document.getElementById("age")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    if (!isEmpty(fname) && !isEmpty(lname) && !isEmpty(age)) {
        console.log("form submit")
    } else {
        console.log("all fields required")
    }

})