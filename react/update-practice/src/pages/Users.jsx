import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {

    /*
        CRUD
        Create     => post              URL and body
        Read       => get               URL
        Update     => put / patch       URL+id and body
        Delete     => delete            URL+id
    
    */
    const [allUsers, setAllUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState({
        name: "",
        age: 0
    })
    const BASE_URL = "http://localhost:5000/users/"
    const readUsers = async () => {
        try {
            const { data } = await axios.get(BASE_URL)
            setAllUsers(data)
        } catch (error) {
            console.log(error)
        }
    }
    const udpateUsers = async () => {
        try {
            await axios.patch(BASE_URL + selectedUser.id, selectedUser)
            console.log("user update success")
            readUsers()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        readUsers()
    }, [])
    return <>
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allUsers.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>
                            <button onClick={e => setSelectedUser(item)}>edit</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

        <input
            onChange={e => setSelectedUser({ ...selectedUser, name: e.target.value })}
            value={selectedUser.name}
            type="text"
            placeholder='enter name' />
        <input
            onChange={e => setSelectedUser({ ...selectedUser, age: e.target.value })}
            value={selectedUser.age}
            type="number"
            placeholder='enter age' />
        <button onClick={udpateUsers}>update</button>

        <pre>{JSON.stringify(selectedUser, null, 2)}</pre>
    </>
}

export default Users