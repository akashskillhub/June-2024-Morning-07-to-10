import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'
import api from '../utils/api'
import { useContext } from 'react'
import { StudentContext } from '../pages/Students'

const StudentForm = ({ selectedStudent }) => {
    const { success, setSuccess } = useContext(StudentContext)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedStudent ? selectedStudent.name : "",
            email: selectedStudent ? selectedStudent.email : "",
            mobile: selectedStudent ? selectedStudent.mobile : "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().required("Enter Email").email("Invalid Email"),
            mobile: yup.string().required("Enter Mobile"),
        }),
        onSubmit: async (values, { resetForm }) => {
            if (selectedStudent) {
                await api.patch("/students/" + selectedStudent.id, values)
                console.log("Update Success")
            } else {
                await api.post("/students", values)
                console.log("Create Success")
            }
            setSuccess(!success)
            resetForm()
        }
    })
    const handleClasses = arg => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[arg] && formik.errors[arg],
        "is-valid": formik.touched[arg] && !formik.errors[arg],
    })
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input className={handleClasses("name")} {...formik.getFieldProps("name")} type="text" />
                <span className='invalid-feedback'>{formik.errors.name}</span>
            </div>
            <div>
                <input className={handleClasses("email")} type="email" {...formik.getFieldProps("email")} />
                <span className='invalid-feedback'>{formik.errors.email}</span>
            </div>
            <div>
                <input className={handleClasses("mobile")} type="text" {...formik.getFieldProps("mobile")} />
                <span className='invalid-feedback'>{formik.errors.mobile}</span>
            </div>
            {
                selectedStudent
                    ? <button data-bs-dismiss="modal" className='btn btn-warning w-100 btn-lg mt-3' type='submit'> Update Student</button>
                    : <button className='btn btn-dark w-100 btn-lg mt-3' type='submit'> add Student</button>
            }

        </form>
    </>
}

export default StudentForm