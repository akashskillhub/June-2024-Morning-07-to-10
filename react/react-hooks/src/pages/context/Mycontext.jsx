import React, { createContext, useContext } from 'react'

const TestContext = createContext()
const Mycontext = () => {
    const x = "dell"
    const y = "apple"
    return <TestContext.Provider value={y}>
        Mycontext
        <hr />
        <Child data={x} />
    </TestContext.Provider>
}
const Child = ({ data }) => {
    return <div>
        Child
        <hr />
        <GrandChild data={data} />
    </div>
}
const GrandChild = ({ data }) => {
    const result = useContext(TestContext)
    return <div>
        GrandChild
        <p>{data}</p>
        <p>{result}</p>
    </div>
}


export default Mycontext