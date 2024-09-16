import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../utils/handleClasses'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/authActions'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
    const { registerSuccess } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().required("Enter email").email(),
            cpassword: yup.string().required("Confirm Password"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(registerUser(values))
            resetForm()
        }
    })

    useEffect(() => {
        if (registerSuccess) {
            toast.success("User Register Success")
            navigate("/login")
        }
    }, [registerSuccess])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">
                                <div>
                                    <label htmlFor="name" className="form-label">First name</label>
                                    <input
                                        type="text"

                                        id="name"
                                        placeholder="Enter your name"
                                        {...formik.getFieldProps("name")}
                                        className={handleClasses("name", formik)}
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.name}</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="email" className="form-label">Choose Email</label>
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
                                        type="text"
                                        {...formik.getFieldProps("password")}
                                        className={handleClasses("password", formik)}
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.password}</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="cpassword" className="form-label"
                                    >Confirm Password</label
                                    >
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("cpassword")}
                                        className={handleClasses("cpassword", formik)}
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.cpassword}</div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p className="text-center mt-3">
                                    Already Have Account? <a href="#">Login</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Register