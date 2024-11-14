import { useFormik } from 'formik'
import * as yup from 'yup'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSingupMutation } from '../redux/apis/authApi'
import { toast } from 'react-toastify'

const Register = () => {
    const [createAccount, { isLoading, isSuccess, isError, error }] = useSingupMutation()
    const navigate = useNavigate()
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
            createAccount(values)
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
            navigate("/login")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(error.data.message)
        }
    }, [isError])
    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Register</div>
                        <form onSubmit={formik.handleSubmit}>

                            <div class="card-body">
                                <div>
                                    <input placeholder='Enter name' type="text" className={cn("name")} {...formik.getFieldProps("name")} />
                                    <span className='invalid-feedback'>{formik.errors.name}</span>
                                </div>
                                <div>
                                    <input placeholder='Enter email' type="text" className={cn("email")} {...formik.getFieldProps("email")} />
                                    <span className='invalid-feedback'>{formik.errors.email}</span>
                                </div>
                                <div>
                                    <input placeholder='Enter mobile' type="text" className={cn("mobile")} {...formik.getFieldProps("mobile")} />
                                    <span className='invalid-feedback'>{formik.errors.mobile}</span>
                                </div>
                                <div>
                                    <input placeholder='Enter password' type="text" className={cn("password")} {...formik.getFieldProps("password")} />
                                    <span className='invalid-feedback'>{formik.errors.password}</span>
                                </div>
                                <div >
                                    <input {...formik.getFieldProps("gender")}
                                        value="male"
                                        id='male'
                                        type="radio"
                                        className={` ms-2 form-check-input ${(formik.touched.gender && formik.errors.gender) && "is-invalid"}`} name="gender" />
                                    <label htmlFor="male">male</label>

                                    <input {...formik.getFieldProps("gender")}
                                        value="female"
                                        id='female'
                                        type="radio"
                                        className={` ms-2 form-check-input ${(formik.touched.gender && formik.errors.gender) && "is-invalid"}`} name="gender" />
                                    <label htmlFor="female">female</label>
                                    <span className='invalid-feedback'>{formik.errors.gender}</span>
                                </div>
                                <button type="submit" class="btn btn-primary mt-3 w-100">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Register