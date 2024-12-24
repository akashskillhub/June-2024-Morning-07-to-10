import React, { useEffect, useState } from 'react'
import { useAdminLoginMutation } from '../redux/authApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const [loginAdmin, { isSuccess, isError, isLoading }] = useAdminLoginMutation()
    const [loginData, setLoginData] = useState({})
    const handleChange = e => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success("login success")
            navigate("/admin")
        }
    }, [isSuccess])
    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <div>
                                <label for="email" class="form-label">First Email</label>
                                <input
                                    name="email"
                                    onChange={handleChange}
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    name="password"
                                    onChange={handleChange}
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <button onClick={e => loginAdmin(loginData)} type="button" class="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p class="text-center mt-3">
                                Dont Have Account? <a href="#">Create Account</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login