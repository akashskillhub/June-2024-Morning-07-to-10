import React, { useEffect, useState } from 'react'
import { useSigninMutation } from '../redux/authApi'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [signin, { isLoading, isSuccess, isError, error }] = useSigninMutation()
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()
    const handleChange = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        signin(userData)
    }
    useEffect(() => {
        if (isSuccess) {
            navigate("/account")
        }
    }, [isSuccess])

    if (isLoading) {
        return <p>Please wait ....</p>
    }
    return <>
        {isError && <pre>{JSON.stringify(error, null, 2)}</pre>}
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name='email' placeholder='Enter email' type="email" />
            <input onChange={handleChange} name='password' placeholder='Enter password' type="password" />
            <button type='submit'>register</button>
        </form>
    </>
}

export default Login