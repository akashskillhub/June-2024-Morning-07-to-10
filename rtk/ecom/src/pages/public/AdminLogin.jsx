import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../../utils/handleClasses'
import { useLazyLoginAdminQuery, useLoginAdminQuery } from '../../redux/apis/authApi'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate()
    const [loginAdmin, { isSuccess, isError, isLoading, error }] = useLazyLoginAdminQuery()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().email("Invalid Email").required("Enter email"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            loginAdmin(values)
            resetForm()
        }
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("Login Success")
            navigate("/admin")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(error.message)
        }
    }, [isError])
    if (isLoading) {
        return <div>
            please wait ... <div class="spinner-border text-primary"></div>
        </div>
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header bg-primary text-light">Admin Login</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">
                                <div className="mt-2">
                                    <label for="email" className="form-label">First Email</label>
                                    <input
                                        type="email"
                                        {...formik.getFieldProps("email")}
                                        className={handleClasses("email", formik)}
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                </div>
                                <div className="mt-2">
                                    <label for="password" className="form-label">Password</label>
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
                                    Signup
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AdminLogin