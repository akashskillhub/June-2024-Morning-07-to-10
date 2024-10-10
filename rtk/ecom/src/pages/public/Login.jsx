import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../../utils/handleClasses'
import { useLazyLoginCustomerQuery, useLoginCustomerQuery } from '../../redux/apis/authApi'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [loginCustomer, { isSuccess, isError, error, isLoading }] = useLazyLoginCustomerQuery()
    const navigate = useNavigate()
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
            loginCustomer(values)
            resetForm()
        }
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("Login Success")
            navigate("/cart")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(JSON.stringify(error.message))
        }
    }, [isError])
    if (isLoading) {
        return <div>
            please wait.. <div class="spinner-border text-primary"></div>
        </div>
    }
    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">

                                <div class="mt-2">
                                    <label for="email" class="form-label">First Email</label>
                                    <input
                                        type="email"
                                        {...formik.getFieldProps("email")}
                                        className={handleClasses("email", formik)}
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.email}</div>
                                </div>
                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        type="password"
                                        {...formik.getFieldProps("password")}
                                        className={handleClasses("password", formik)}
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.password}</div>
                                </div>

                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p class="text-center mt-3">
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

export default Login