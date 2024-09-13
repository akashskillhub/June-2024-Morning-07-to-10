import clsx from 'clsx'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { addEmployee, deleteEmployees, getEmployees, updateEmployees } from '../redux/employeeActions'

const Employee = () => {
    const distach = useDispatch()
    const { employees, createEmployee, employeeUpdate, employeeDelete } = useSelector(state => state.allEmployees)
    const [selectedEmployee, setSelectedEmployee] = useState()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedEmployee ? selectedEmployee.name : "",
            email: selectedEmployee ? selectedEmployee.email : "",
            mobile: selectedEmployee ? selectedEmployee.mobile : "",
            depart: selectedEmployee ? selectedEmployee.depart : "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().required("Enter email"),
            mobile: yup.string().required("Enter mobile"),
            depart: yup.string().required("Enter depart"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedEmployee) {
                // update
                //                          👇 to send id         👇 all input values
                distach(updateEmployees({ ...selectedEmployee, ...values }))
                setSelectedEmployee(null) // 👈 to reset the form
            } else {
                // add
                distach(addEmployee(values))
            }
            resetForm()
        }
    })

    const handleClasses = arg => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[arg] && formik.errors[arg],
        "is-valid": formik.touched[arg] && !formik.errors[arg],
    })

    useEffect(() => {
        distach(getEmployees())
    }, [createEmployee, employeeUpdate, employeeDelete])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Employee</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input className={handleClasses("name")} {...formik.getFieldProps("name")} type="text" placeholder='Enter Name' />
                                    <span className="invalid-feedback">{formik.errors.name}</span>
                                </div>
                                <div>
                                    <input className={handleClasses("email")} {...formik.getFieldProps("email")} type="email" placeholder='Enter Email' />
                                    <span className="invalid-feedback">{formik.errors.email}</span>
                                </div>
                                <div>
                                    <input className={handleClasses("mobile")} {...formik.getFieldProps("mobile")} type="mobile" placeholder='Enter Mobile' />
                                    <span className="invalid-feedback">{formik.errors.mobile}</span>
                                </div>
                                <div>
                                    <select className={handleClasses("depart")} {...formik.getFieldProps("depart")}>
                                        <option value="">Choose Department</option>
                                        <option value="frontend">Frontend</option>
                                        <option value="backend">Backend</option>
                                        <option value="mobile-app">Mobile App</option>
                                        <option value="devops">Devops</option>
                                        <option value="ai/ml">AI / ML</option>
                                    </select>
                                    <span className="invalid-feedback">{formik.errors.depart}</span>
                                </div>
                                {
                                    selectedEmployee
                                        ? <button className='btn btn-warning' type='submit'>Update Employee</button>
                                        : <button className='btn btn-dark' type='submit'>Add Employee</button>
                                }


                            </form>
                        </div>
                    </div>
                    <table class="table table-dark table-striped table-hover mt-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>name</th>
                                <th>email</th>
                                <th>mobile</th>
                                <th>department</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees && employees.map(item => <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.depart}</td>
                                    <td>
                                        <button
                                            onClick={e => setSelectedEmployee(item)}
                                            className='mx-2 btn btn-sm btn-outline-warning'>Edit</button>
                                        <button
                                            onClick={e => distach(deleteEmployees(item.id))}
                                            className='mx-2 btn btn-sm btn-outline-danger'>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </>
}

export default Employee