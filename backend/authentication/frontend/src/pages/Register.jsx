import { useFormik } from 'formik'
import * as yup from 'yup'
import clsx from 'clsx'
import { useRegisterMutation } from '../redux/authApi'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Register = () => {
    const [createAccount, { isLoading, isSuccess, isError, error }] = useRegisterMutation()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter name"),
            email: yup.string().required("Enter email"),
            mobile: yup.string().required("Enter mobile"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            createAccount(values)
            resetForm()
        }
    })
    const cn = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    useEffect(() => {
        if (isSuccess) {
            navigate("/login")
        }
    }, [isSuccess])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Register User</div>
                        <form onSubmit={formik.handleSubmit}>

                            <div className="card-body">
                                <div>
                                    <input placeholder='Enter name' type="text" className={cn("name")} {...formik.getFieldProps("name")} />
                                    <span className='invalid-feedback'>{formik.errors.name}</span>
                                </div>
                                <div>
                                    <input placeholder='Enter email' type="text" className={cn("email")} {...formik.getFieldProps("email")} />
                                    <span className='invalid-feedback'>{formik.errors.email}</span>
                                </div>
                                <div>
                                    <input placeholder='Enter mobile' type="text" className={cn("mobile")} {...formik.getFieldProps("mobile")} />
                                    <span className='invalid-feedback'>{formik.errors.mobile}</span>
                                </div>
                                <div>
                                    <input placeholder='Enter password' type="text" className={cn("password")} {...formik.getFieldProps("password")} />
                                    <span className='invalid-feedback'>{formik.errors.password}</span>
                                </div>

                                <button type="submit" className="btn btn-primary mt-3 w-100">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Register