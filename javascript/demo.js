export const arr = ["dell", "hp"]

export const obj = { name: "ross" }

// 👇 named export
export const getdata = () => {
    console.log("getdata fn called")
}

const setData = () => {
    console.log("setdata called");

}

// 👇 default export : only once per file
export default setData