import React, { useState } from 'react'

const Test = () => {
    const [dummy, setDummy] = useState("dell")
    const [age, setAge] = useState(10)
    const [city, setCity] = useState("boston")

    const [selectedUser, setSelectedUser] = useState({
        name: "",
        age: 0,
        city: "",
    })
    const [users, setUsers] = useState([
        { id: 1, name: "john", age: 20, city: "london" },
        { id: 2, name: "kate", age: 21, city: "new york" },
    ])
    return <>
        {
            users.map(item => <div key={item.id}>
                <div>{item.name} {item.age} {item.city}  <button onClick={
                    e => {
                        setSelectedUser(item)
                        // setDummy(item.name)
                        // setAge(item.age)
                        // setCity(item.city)
                    }
                }>edit</button> </div>
            </div>)
        }

        <input type="text" value={selectedUser.name} />
        <input type="number" value={selectedUser.age} />
        <input type="text" value={selectedUser.city} />
    </>
}

export default Test