export const split = (str, delimiter) => {
    const result = []
    let temp = ""
    for (let i = 0; i < str.length; i++) {
        if (delimiter === undefined) {
            result.push(str[i])
        } else {
            if (str[i] === delimiter) {
                result.push(temp)
                temp = ""
            } else {
                temp += str[i]
            }
        }
    }
    if (delimiter !== undefined) {
        result.push(temp)
    }
    return result
}


export const join = (arr, delimiter = "") => {
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            str += arr[i]
        } else {
            str += arr[i] + delimiter
        }
    }
    return str
}


export const reverse = (arr) => {
    const result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}