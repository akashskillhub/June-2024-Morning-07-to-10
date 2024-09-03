import React, { createContext, useContext } from 'react'
import { TestContext } from '../App'

// context =>  avoid prop drilling
// prop drilling

const DemoContext = createContext()
const Parent = ({ brand }) => {
    const x = "dell"
    const users = ["ross", "kate"]
    return <DemoContext.Provider value={{ x, users }}>
        <div>Parent</div>
        <hr />
        <Child data={x} brand={brand} />
    </DemoContext.Provider>

}

const Child = ({ data, brand }) => {
    return <>
        <div>child</div>
        <hr />
        <GrandChild whatever={data} brand={brand} />
    </>
}
const GrandChild = ({ whatever, brand }) => {

    const result = useContext(TestContext)
    const { x, users } = useContext(DemoContext)
    return <>
        <div>Grand child</div>
        <h1>{whatever}</h1>
        <h1>{brand}</h1>
        <h1>{result}</h1>
        <h1>{x}</h1>
        <h1>{users}</h1>
    </>
}

export default Parent