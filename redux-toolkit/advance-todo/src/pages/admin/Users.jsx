import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../../utils/handleClasses'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployee, deleteEmployee, getEmployee, updateEmployee } from '../../redux/adminActions'
import { useEffect, useState } from 'react'

const Users = () => {
    const [selectedEmployee, setSelectedEmployee] = useState()
    const dispatch = useDispatch()
    const {
        loading,
        error,
        employeeCreate,
        employeeUpdate,
        employeeDelete,
        employees } = useSelector(state => state.admin)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedEmployee ? selectedEmployee.name : "",
            email: selectedEmployee ? selectedEmployee.email : "",
            password: selectedEmployee ? selectedEmployee.password : "",
            cpassword: selectedEmployee ? selectedEmployee.cpassword : "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().required("Enter email").email(),
            cpassword: yup.string().required("Confirm Password"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedEmployee) {
                dispatch(updateEmployee({ ...selectedEmployee, ...values }))
                setSelectedEmployee(null)
            } else {
                dispatch(addEmployee(values))
            }
            resetForm()
        }
    })

    useEffect(() => {
        dispatch(getEmployee())
    }, [employeeDelete, employeeCreate, employeeUpdate])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">
                                <div>
                                    <label htmlFor="name" className="form-label">First name</label>
                                    <input
                                        type="text"

                                        id="name"
                                        placeholder="Enter your name"
                                        {...formik.getFieldProps("name")}
                                        className={handleClasses("name", formik)}
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.name}</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="email" className="form-label">Choose Email</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("email")}
                                        className={handleClasses("email", formik)}
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("password")}
                                        className={handleClasses("password", formik)}
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.password}</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="cpassword" className="form-label"
                                    >Confirm Password</label
                                    >
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("cpassword")}
                                        className={handleClasses("cpassword", formik)}
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.cpassword}</div>
                                </div>
                                {
                                    selectedEmployee
                                        ? <button type="submit" className="btn btn-warning w-100 mt-3">
                                            Update Employee
                                        </button>
                                        : <button type="submit" className="btn btn-primary w-100 mt-3">
                                            Create Employee
                                        </button>
                                }

                                <p className="text-center mt-3">
                                    Already Have Account? <a href="#">Login</a>
                                </p>
                            </div>
                        </form>
                    </div>

                    <table class="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees && employees.map(item => <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>
                                        <button onClick={e => setSelectedEmployee(item)} className='btn btn-sm btn-outline-warning'>Edit</button>
                                        <button onClick={e => dispatch(deleteEmployee(item.id))} className='btn btn-sm btn-outline-danger'>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div >
    </>
}

export default Users