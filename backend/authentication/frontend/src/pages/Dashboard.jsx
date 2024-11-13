import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const { user } = useSelector(state => state.auth)
    return <>
        {
            user && <h1>welcome {user.name}</h1>
        }
        <div>Dashboard</div>
    </>
}

export default Dashboard
