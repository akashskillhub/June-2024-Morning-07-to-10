const setter = () => { console.log("setter") }

const useState = arg => {
    return [arg, setter]
}

const [count, setCount] = useState(10)