import clsx from 'clsx'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { addStudent, deleteStudent, getStudent, updateStudent } from '../redux/studentActions'

const Students = () => {
    const callAction = useDispatch()
    const { loading, error, blogs, blogCreate, blogUpdate, blogDelete } = useSelector(state => state.allBlogs)
    const [selectedStudent, setSelectedStudent] = useState()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedStudent ? selectedStudent.name : "",
            email: selectedStudent ? selectedStudent.email : "",
            password: selectedStudent ? selectedStudent.password : "",
            education: selectedStudent ? selectedStudent.education : "",
            address: selectedStudent ? selectedStudent.address : "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter name"),
            email: yup.string().required("Enter email"),
            password: yup.string().required("Enter password"),
            education: yup.string().required("Enter education"),
            address: yup.string().required("Enter address"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedStudent) {
                // update
                callAction(updateStudent({ ...selectedStudent, ...values }))
                setSelectedStudent(null)
            } else {
                // create
                callAction(addStudent(values))
            }
            resetForm()
        }
    })
    const handleClasses = arg => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[arg] && formik.errors[arg],
        "is-valid": formik.touched[arg] && !formik.errors[arg],

    })

    useEffect(() => { callAction(getStudent()) }, [blogCreate, blogUpdate, blogDelete])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2">
                    <div class="card">
                        <div class="card-header">Add Students</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input
                                        className={handleClasses("name")}
                                        {...formik.getFieldProps("name")}
                                        type="text"
                                        placeholder='Enter name' />
                                    <span className="invalid-feedback">{formik.errors.name}</span>
                                </div>
                                <div>
                                    <input
                                        className={handleClasses("email")}
                                        {...formik.getFieldProps("email")}
                                        type="text"
                                        placeholder='Enter Email' />
                                    <span className="invalid-feedback">{formik.errors.email}</span>
                                </div>
                                <div>
                                    <textarea
                                        className={handleClasses("address")}
                                        {...formik.getFieldProps("address")}
                                        placeholder='Enter Address'></textarea>
                                    <span className="invalid-feedback">{formik.errors.address}</span>
                                </div>
                                <div>
                                    <select className={handleClasses("education")}
                                        {...formik.getFieldProps("education")} >
                                        <option value="">Chooses Education</option>
                                        <option value="BCA">BCA</option>
                                        <option value="BCS">BCS</option>
                                        <option value="BTech">BTech</option>
                                        <option value="MCA">MCA</option>
                                        <option value="MTech">MTech</option>
                                    </select>

                                    <span className="invalid-feedback">{formik.errors.education}</span>
                                </div>
                                <div>
                                    <input
                                        className={handleClasses("password")}
                                        {...formik.getFieldProps("password")}
                                        type="password"
                                        placeholder='Enter password' />
                                    <span className="invalid-feedback">{formik.errors.password}</span>
                                </div>
                                {
                                    selectedStudent
                                        ? <button className='w-100 btn-lg btn btn-warning' type='submit'>Update Blog</button>
                                        : <button className='w-100 btn-lg btn btn-dark' type='submit'>Add Student</button>
                                }

                            </form>
                        </div>
                    </div>

                    <table class="table table-dark table-striped table-hover mt-5">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Education</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs && blogs.map(item => <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.education}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button onClick={e => setSelectedStudent(item)} className='btn btn-sm btn-outline-warning mx-2'>Edit</button>
                                        <button onClick={e => callAction(deleteStudent(item.id))} className='btn btn-sm btn-outline-danger mx-2'>Delete</button>
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

export default Students