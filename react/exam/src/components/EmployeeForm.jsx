import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'
import api from '../utils/api'
import { EmployeeContext } from '../pages/Employee'
import { useContext } from 'react'

const EmployeeForm = ({ selectedEmployee }) => {
    const { success, setSuccess } = useContext(EmployeeContext)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedEmployee ? selectedEmployee.name : "",
            age: selectedEmployee ? selectedEmployee.age : "",
            doj: selectedEmployee ? selectedEmployee.doj : "",
            depart: selectedEmployee ? selectedEmployee.depart : "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            age: yup.string().required("Enter age"),
            doj: yup.string().required("Enter doj"),
            depart: yup.string().required("Enter department"),
        }),
        onSubmit: async (values, { resetForm }) => {
            if (selectedEmployee) {
                await api.patch("/employee/" + selectedEmployee.id, values)
                console.log("employee update success");
            } else {
                await api.post("/employee", values)
                console.log("employee create success");
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
                <input
                    {...formik.getFieldProps("name")}
                    className={handleClasses("name")} type="text" placeholder='Enter Employee Name' />
                <span className='invalid-feedback'>{formik.errors.name}</span>
            </div>
            <div>
                <input
                    {...formik.getFieldProps("age")}
                    className={handleClasses("age")} type="number" placeholder='Enter Employee Age' />
                <span className='invalid-feedback'>{formik.errors.age}</span>
            </div>
            <div>
                <input
                    {...formik.getFieldProps("doj")}
                    className={handleClasses("doj")} type="date" placeholder='Enter Employee Date Of Joining' />
                <span className='invalid-feedback'>{formik.errors.doj}</span>
            </div>
            <div>

                <select
                    {...formik.getFieldProps("depart")}
                    className={handleClasses("depart")}>
                    <option value="">Choose Department</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="devops">Devops</option>
                </select>
                <span className='invalid-feedback'>{formik.errors.depart}</span>
            </div>
            {
                selectedEmployee
                    ? <button data-bs-dismiss="modal" type="submit" className="btn btn-warning w-100  mt-3 btn-lg">Update Employee</button>
                    : <button type="submit" className="btn btn-primary w-100  mt-3 btn-lg">Add Employee</button>
            }

        </form>
    </>
}



export default EmployeeForm