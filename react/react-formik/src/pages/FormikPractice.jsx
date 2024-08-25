import React from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
const FormikPractice = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().required("Enter Email").email(),
            password: yup.string().required("Enter Password").min(3),
        }),
        onSubmit: (values, { resetForm }) => {
            resetForm()
        }
    })

    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <form >
                                <div>
                                    <input
                                        className={`form-control my-2 ${formik.errors.name && " is-invalid"} `}
                                        {...formik.getFieldProps("name")}
                                        type="text" />
                                    <p className='text-danger'>{formik.errors.name}</p>
                                </div>
                                <div>
                                    <input
                                        className={`form-control my-2 ${formik.errors.email && " is-invalid"} `}
                                        {...formik.getFieldProps("email")} type="email" />
                                    <p className='text-danger'>{formik.errors.email}</p>
                                </div>
                                <div>
                                    <input
                                        className={`form-control my-2 ${formik.errors.password && " is-invalid"} `}
                                        {...formik.getFieldProps("password")} type="password" />
                                    <p className='text-danger'>{formik.errors.password}</p>
                                </div>
                                <button type="submit">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
}

export default FormikPractice