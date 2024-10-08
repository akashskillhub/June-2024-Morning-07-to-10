const test = (arg) => {
    dd()
    arg()
}
const dummy = () => { }
const dd = () => { }


const x = test(dummy)
