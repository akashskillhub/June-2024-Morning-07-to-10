import React, { useEffect } from 'react'
import { handleClasses } from '../../utils/handleClasses'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useResturantRegisterMutation } from '../../redux/apis/authApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const RegisterResturant = () => {
    const navigate = useNavigate()
    const [registerResturant, { isError, isLoading, isSuccess, error }] = useResturantRegisterMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter name"),
            email: yup.string().required("Enter email").email(),
            password: yup.string().required("Enter password"),
            cpassword: yup.string().required("Enter cpassword").oneOf([yup.ref("password")]),
        }),
        onSubmit: (values, { resetForm }) => {
            registerResturant(values)
            resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("register success")
            navigate("/login-resturant")
        }
    }, [isSuccess])

    return <form onSubmit={formik.handleSubmit}>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Register</div>
                        <div class="card-body">
                            <div>
                                <label for="name" class="form-label">name</label>
                                <input
                                    className={handleClasses(formik, "name")}
                                    {...formik.getFieldProps("name")}
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.name}</div>
                            </div>
                            <div class="mt-2">
                                <label for="email" class="form-label">email</label>
                                <input
                                    className={handleClasses(formik, "email")}
                                    {...formik.getFieldProps("email")}
                                    type="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.email}</div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="form-label">password</label>
                                <input
                                    className={handleClasses(formik, "password")}
                                    {...formik.getFieldProps("password")}
                                    type="password"
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.password}</div>
                            </div>
                            <div class="mt-2">
                                <label for="cpassword" class="form-label">confirm password</label>

                                <input
                                    className={handleClasses(formik, "cpassword")}
                                    {...formik.getFieldProps("cpassword")}
                                    type="password"
                                    id="cpassword"
                                    placeholder="Confirm Your Password"
                                />

                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">
                                    {formik.errors.cpassword}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-3">
                                Register
                            </button>
                            <p className='text-center mt-3'>OR</p>
                            <button type='button' className='btn btn-outline-primary w-100'>Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
}


export default RegisterResturant