import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { clsx } from 'clsx';
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { useCustomerLoginMutation } from '../../redux/auth/authApi';
import { toast } from 'react-toastify';
const Signin = () => {
    const [loginCustomer, { isSuccess }] = useCustomerLoginMutation()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            password: "",
            email: "",
        },
        validationSchema: yup.object({
            password: yup.string().required("Enter password"),
            email: yup.string().required("Enter email"),
        }),
        onSubmit: (values, { resetForm }) => {
            loginCustomer(values)
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        'form-control my-2': true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            toast.success("login success")
            navigate("/checkout")
        }
    }, [isSuccess])
    return <>

        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div class="card my-2">
                        <div class="card-header text-center">Login</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>

                                <input
                                    className={handleClasses('email')}
                                    {...formik.getFieldProps('email')}
                                    type="email"
                                    placeholder='Email' />
                                <span className='invalid-feedback'>{formik.errors.email}</span>

                                <input
                                    className={handleClasses('password')}
                                    {...formik.getFieldProps('password')}
                                    type="password"
                                    placeholder='Password' />
                                <span className='invalid-feedback'>{formik.errors.password}</span>

                                <button
                                    className='btn btn-primary w-100'
                                    type='submit'>Login</button>
                            </form>
                            <Link className='nav-link' to="/register">Dont have account? Signup</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    </>
}

export default Signin