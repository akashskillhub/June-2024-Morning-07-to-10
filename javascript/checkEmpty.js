export const isEmpty = arg => {
    // console.log("is empty called")
    if (arg.value === "") {
        arg.classList.remove("is-valid")
        arg.classList.add("is-invalid")
        return true
    } else {
        arg.classList.remove("is-invalid")
        arg.classList.add("is-valid")
        return false
    }
}