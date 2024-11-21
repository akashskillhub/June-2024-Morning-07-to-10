import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import clsx from 'clsx'
import { useSinginMutation } from '../redux/apis/authApi'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [signin, { isLoading, isError, isSuccess, error, data }] = useSinginMutation()
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
            signin(values)
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
            toast.success("register success")
            navigate("/account")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.success(error.data.message)
        }
    }, [isError])
    if (isLoading) {
        return <div class="spinner-border text-primary"></div>
    }

    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <form onSubmit={formik.handleSubmit}>

                            <div className="card-body">

                                <div className='form-floating'>
                                    <input name='email' placeholder='Enter email' type="text"
                                        className={cn("email")}
                                        {...formik.getFieldProps("email")} />
                                    <label htmlFor="email">Enter Email</label>
                                    <span className='invalid-feedback'>{formik.errors.email}</span>
                                </div>
                                <div className='form-floating'>
                                    <input
                                        name='password'
                                        placeholder='Enter password'
                                        type="password"
                                        className={cn("password")}
                                        {...formik.getFieldProps("password")} />
                                    <label htmlFor="password">Enter Password</label>
                                    <span className='invalid-feedback'>{formik.errors.password}</span>
                                </div>

                                <button type="submit" className="btn btn-primary mt-3 w-100 btn-lg">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Login