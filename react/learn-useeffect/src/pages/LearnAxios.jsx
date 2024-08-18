import React, { useEffect, useState } from 'react'
import axios from "axios"

const LearnAxios = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const BASE_URL = "https://jsonplaceholder.typicode.com/users"
        const { data } = await axios(BASE_URL)
        setUsers(data)
    }
    useEffect(() => {
        getUsers()
    }, [])
    return <>
        <div>LearnAxios</div>
        <table border={1}>
            <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>mobile</th>
                    <th>website</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(item => <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.website}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>

}

export default LearnAxios