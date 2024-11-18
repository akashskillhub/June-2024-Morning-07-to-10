import React, { useEffect, useState } from 'react'
import { useSignupMutation } from '../redux/authApi'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [signup, { isLoading, isError, error, isSuccess, data }] = useSignupMutation()
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()
    const handleChange = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = e => {

        e.preventDefault()
        signup(userData)
    }

    useEffect(() => {
        if (isSuccess) {
            navigate("/login")
        }
    }, [isSuccess])
    if (isLoading) {
        return <p>Please wait ....</p>
    }
    return <>
        {isError && <pre>{JSON.stringify(error, null, 2)}</pre>}
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name='fullname' placeholder='Enter fullname' type="text" />
            <input onChange={handleChange} name='email' placeholder='Enter email' type="email" />
            <input onChange={handleChange} name='degree' placeholder='Enter degree' type="text" />
            <input onChange={handleChange} name='city' placeholder='Enter city' type="text" />
            <input onChange={handleChange} name='password' placeholder='Enter password' type="password" />
            <button type='submit'>register</button>
        </form>
    </>
}

export default Register