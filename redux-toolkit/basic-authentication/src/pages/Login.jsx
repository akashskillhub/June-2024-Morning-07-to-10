import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../utils/handleClasses'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/authActions'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const { loggedInUser } = useSelector(state => state.auth)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required("Enter Email").email(),
            password: yup.string().required("Enter Password"),
        }),
        onSubmit: (values, { resetForm }) => {

            dispatch(loginUser(values))
            resetForm()
        }
    })

    useEffect(() => {
        if (loggedInUser) {
            toast.success("Login Success")
            navigate("/admin")
        }
    }, [loggedInUser])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <form onSubmit={formik.handleSubmit}>

                            <div className="card-body">
                                <div>
                                    <label htmlFor="email" className="form-label">First Email</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("email")}
                                        className={handleClasses("email", formik)}
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        {...formik.getFieldProps("password")}
                                        className={handleClasses("password", formik)}
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.password}</div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Login
                                </button>
                                <p className="text-center mt-3">
                                    Dont Have Account? <a href="#">Create Account</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login