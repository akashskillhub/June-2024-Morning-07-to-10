import React from 'react'

const Learnjsx = () => {
    const brand = "dell"
    const isActive = true
    const price = 500
    const obj = { name: "ross", age: 20 }
    const arr = [10, 20, 30]

    const users = [
        { name: "kate", age: 20 },
        { name: "rachel", age: 21 },
    ]
    return <div>
        <div>Learnjsx</div>
        <h1>{brand}</h1>
        <h1>{isActive ? "TRUE" : "FALSE"}</h1>
        <h1>{price}</h1>
        {/* <h1>{obj}</h1>  // error */}
        <h1>{obj.name} {obj.age}</h1>
        <h1>{arr}</h1>

        {
            arr.map(item => <h1 key={item}>{item}</h1>)
        }

        {
            users.map(item => <div key={item.name}>
                <h1>{item.name}</h1>
                <p>{item.age}</p>
            </div>)
        }

        <table border={1}>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(item => <tr key={item.age}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>)
                }
            </tbody>
        </table>

        {/* <h1>{users}</h1> // error */}
    </div>
}

export default Learnjsx