import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../../utils/handleClasses'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerPatient } from '../../redux/actions/authActions'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, error, patientRegister } = useSelector(state => state.auth)
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            gender: "",
            mobile: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter name"),
            email: yup.string().required("Enter email"),
            gender: yup.string().required("Enter gender"),
            mobile: yup.string().required("Enter mobile"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(registerPatient(values))
            resetForm()
        }
    })
    useEffect(() => {
        if (patientRegister) {
            toast.success("Register Success")
            navigate("/patient-login")
        }
    }, [patientRegister])
    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    if (loading) {
        return <div>
            Please Wait ....
            <div class="spinner-border text-primary"></div>
        </div>
    }

    return <>
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card" >
                        <div className="card-header">Patient Register</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">

                                <div>
                                    <input
                                        {...formik.getFieldProps("name")}
                                        className={handleClasses("name", formik)}
                                        type="text" placeholder='Enter Name ' />
                                    <span className="invalid-feedback">{formik.errors.name}</span>
                                </div>
                                <div>
                                    <input
                                        {...formik.getFieldProps("email")}
                                        className={handleClasses("email", formik)}
                                        type="email" placeholder='Enter email' />
                                    <span className="invalid-feedback">{formik.errors.email}</span>
                                </div>
                                <div>
                                    <select
                                        {...formik.getFieldProps("gender")}
                                        className={handleClasses("gender", formik)}
                                    >
                                        <option value="">Choose Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <span className="invalid-feedback">{formik.errors.gender}</span>
                                </div>
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
                                <button type='submit' className='btn btn-primary w-100 mt-3 btn-lg'>Register Patient</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Register