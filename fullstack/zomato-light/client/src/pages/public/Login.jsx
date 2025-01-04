import React, { useEffect } from 'react'
import { useFormik } from "formik"
import * as yup from 'yup'
import { handleClasses } from '../../utils/handleClasses'
import { useResturantSigninMutation } from '../../redux/apis/authApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [loginResturant, { isSuccess, isError, error, isLoading }] = useResturantSigninMutation()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required("Enter Email"),
            password: yup.string().required("Enter Password"),
        }),
        onSubmit: (values, { resetForm }) => {
            loginResturant(values)
            resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success('login success')
            navigate('/resturant')
        }
    }, [isSuccess])

    return <form onSubmit={formik.handleSubmit}>
        <div className="container">
            <div className="row mt-auto">
                <div className="col-sm-6 offset-sm-3 mt-5">
                    <div className="card bg-dark text-light">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <div>
                                <label for="email" className="form-label">Email</label>
                                <input
                                    className={handleClasses(formik, "email")}
                                    {...formik.getFieldProps("email")}
                                    type="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.email}</div>
                            </div>
                            <div className="mt-2">
                                <label for="password" className="form-label">Password</label>
                                <input
                                    className={handleClasses(formik, "password")}
                                    {...formik.getFieldProps("password")}
                                    type="password"
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.email}</div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p className='text-center my-3'>OR</p>
                            <button className='btn btn-outline-primary w-100'>Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default Login