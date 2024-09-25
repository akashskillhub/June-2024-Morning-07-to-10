import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../../utils/handleClasses'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginPatient } from '../../redux/actions/authActions'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, error, patient } = useSelector(state => state.auth)
    const formik = useFormik({
        initialValues: {
            mobile: "",
            password: "",
        },
        validationSchema: yup.object({
            mobile: yup.string().required("Enter mobile"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(loginPatient(values))
            resetForm()
        }
    })
    useEffect(() => {
        if (patient) {
            toast.success("Login Success")
            navigate("/patient")
        }
    }, [patient])
    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])
    if (loading) {
        return <div>
            please wait ...
            <div class="spinner-border text-primary"></div>
        </div>
    }
    return <>
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card" >
                        <div className="card-header">Patient Login</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">

                                <div>
                                    <input
                                        {...formik.getFieldProps("mobile")}
                                        className={handleClasses("mobile", formik)}
                                        type="number" placeholder='Enter Mobile Number' />
                                    <span className="invalid-feedback">{formik.errors.mobile}</span>
                                </div>
                                <div>
                                    <input
                                        {...formik.getFieldProps("password")}
                                        className={handleClasses("password", formik)}
                                        type="password" placeholder='***********' />
                                    <span className="invalid-feedback">{formik.errors.password}</span>
                                </div>
                                <button type='submit' className='btn btn-primary w-100 mt-3 btn-lg'>Login Patient</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login