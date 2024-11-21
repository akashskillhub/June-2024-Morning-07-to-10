import { useFormik } from 'formik'
import * as yup from 'yup'
import clsx from 'clsx'
import { toast } from 'react-toastify'
import { useSingupMutation } from '../redux/apis/authApi'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [singup, { isLoading, isError, isSuccess, error, data }] = useSingupMutation()

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
            singup(values)
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
            navigate("/login")
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
                        <div className="card-header">Register</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">
                                <div className='form-floating'>
                                    <input name='name' placeholder='Enter name' type="text" className={cn("name")} {...formik.getFieldProps("name")} />
                                    <label htmlFor="name">Enter Name</label>
                                    <span className='invalid-feedback'>{formik.errors.name}</span>
                                </div>
                                <div className='form-floating'>
                                    <input name='email' placeholder='Enter email' type="text" className={cn("email")} {...formik.getFieldProps("email")} />
                                    <label htmlFor="name">Enter Email</label>
                                    <span className='invalid-feedback'>{formik.errors.email}</span>
                                </div>
                                <div className='form-floating'>
                                    <input name='mobile' placeholder='Enter mobile' type="text" className={cn("mobile")} {...formik.getFieldProps("mobile")} />
                                    <label htmlFor="mobile">Enter Mobile</label>
                                    <span className='invalid-feedback'>{formik.errors.mobile}</span>
                                </div>
                                <div className='form-floating'>
                                    <input name='password' placeholder='Enter password' type="password" className={cn("password")} {...formik.getFieldProps("password")} />
                                    <label htmlFor="password">Enter Password</label>
                                    <span className='invalid-feedback'>{formik.errors.password}</span>
                                </div>

                                <button type="submit" className="btn btn-primary mt-3 w-100 btn-lg">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Register