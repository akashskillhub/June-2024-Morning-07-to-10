import { useFormik } from 'formik'
import * as yup from 'yup'
import clsx from 'clsx'
import { useLoginMutation } from '../redux/authApi'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const [signIn, { isLoading, isSuccess, isError, error }] = useLoginMutation()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required("Enter email"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            signIn(values)
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
            toast.success("login success")
            navigate("/dash")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(error.data.message)
        }
    }, [isError])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Login User</div>
                        <form onSubmit={formik.handleSubmit}>

                            <div className="card-body">

                                <div>
                                    <input placeholder='Enter email' type="text" className={cn("email")} {...formik.getFieldProps("email")} />
                                    <span className='invalid-feedback'>{formik.errors.email}</span>
                                </div>
                                <div>
                                    <input placeholder='Enter password' type="text" className={cn("password")} {...formik.getFieldProps("password")} />
                                    <span className='invalid-feedback'>{formik.errors.password}</span>
                                </div>

                                <button type="submit" className="btn btn-primary mt-3 w-100">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Login