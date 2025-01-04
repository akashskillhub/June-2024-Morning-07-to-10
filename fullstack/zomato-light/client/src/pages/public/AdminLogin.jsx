import { useFormik } from "formik"
import { toast } from "react-toastify"
import * as yup from "yup"
import { handleClasses } from "../../utils/handleClasses"
import { useAdminSigninMutation, useAdminVerifyOtpMutation } from "../../redux/apis/authApi"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AdminLogin = () => {
    const [showOtp, setShowOtp] = useState(false)

    const [verifyOTP, { isSuccess, isError, error, isLoading }] = useAdminVerifyOtpMutation()
    const navigate = useNavigate()
    const [signIn, {
        isSuccess: adminSigninSuccess,
        isError: adminSigninIsError,
        error: adminSigfninError,
        isLoading: adminSigninIsLoading
    }] = useAdminSigninMutation()

    const formik = useFormik({
        initialValues: {
            userName: "",
            otp: "",
        },
        validationSchema: yup.object({
            userName: yup.string().required(),
            otp: yup.string(),
        }),
        onSubmit: (values, { resetForm }) => {
            if (showOtp) {
                verifyOTP(values)
            } else {
                signIn(values)
            }
            // resetForm()
        }
    })
    useEffect(() => {
        if (adminSigninSuccess) {
            formik.setFieldValue("otp", "")
            setShowOtp(true)
            toast.success("please verify otp")
        }
    }, [adminSigninSuccess])

    useEffect(() => {
        if (adminSigninIsError) {
            toast.error(adminSigfninError.message)
        }
    }, [adminSigninIsError])

    useEffect(() => {
        if (isSuccess) {
            navigate("/admin")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            setShowOtp(false)
            toast.error(error.data ? error.data.message : "sosmething went wrong")
        }
    }, [isError])

    if (adminSigninIsLoading || isLoading) {
        return <p>Please Wait ....</p>
    }

    return <>
        <form onSubmit={formik.handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                {
                                    showOtp
                                        ? <div>
                                            <label for="otp" className="form-label">Enter Otp</label>
                                            <input
                                                type="text"
                                                {...formik.getFieldProps("otp")}
                                                className={handleClasses(formik, "otp")}
                                                id="otp"
                                                placeholder="Enter Your otp"
                                            />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">{formik.errors.otp}</div>
                                        </div>
                                        : <div>
                                            <label for="email" className="form-label">Enter Email Or Mobile Number</label>
                                            <input
                                                type="text"
                                                {...formik.getFieldProps("userName")}
                                                className={handleClasses(formik, "userName")}
                                                id="email"
                                                placeholder="Enter Your Email Or Mobile Number"
                                            />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">{formik.errors.userName}</div>
                                        </div>
                                }

                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    {showOtp ? "Verify OTP" : "Login"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </>
}

export default AdminLogin