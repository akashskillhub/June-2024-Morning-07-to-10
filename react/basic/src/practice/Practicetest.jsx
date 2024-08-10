import React from 'react'


/*
    Task : Print All Users in an Table
*/
const Practicetest = () => {
    const USERS = [
        { id: 1, name: "ross", age: 20, city: "london" },
        { id: 2, name: "kate", age: 21, city: "new york" },
        { id: 3, name: "ethan", age: 23, city: "berlin" },
        { id: 4, name: "rachel", age: 25, city: "boston" },
        { id: 5, name: "joe", age: 22, city: "sydney" },
    ]
    return <div>
        <Card users={USERS}></Card>
    </div>
}

const Card = ({ users }) => {
    return <div>
        <h1>Users</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>city</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(item => <tr key={item.name}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.city}</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

    </div>
}

export default Practicetest