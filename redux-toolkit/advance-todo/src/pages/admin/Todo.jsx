import clsx from 'clsx'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'

const Todo = () => {
    const [selectedTodo, setSelectedTodo] = useState()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            task: selectedTodo ? selectedTodo.name : "",
            desc: selectedTodo ? selectedTodo.email : "",
            priority: selectedTodo ? selectedTodo.mobile : "",
            employee: selectedTodo ? selectedTodo.depart : "",
        },
        validationSchema: yup.object({
            task: yup.string().required("Enter task"),
            desc: yup.string().required("Enter desc"),
            priority: yup.string().required("Enter priority"),
            employee: yup.string().required("Enter employee"),
        }),
        onSubmit: (values, { resetForm }) => {

            resetForm()
        }
    })

    const handleClasses = arg => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[arg] && formik.errors[arg],
        "is-valid": formik.touched[arg] && !formik.errors[arg],
    })


    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Todo</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input className={handleClasses("task")} {...formik.getFieldProps("task")} type="text" placeholder='Enter Name' />
                                    <span className="invalid-feedback">{formik.errors.name}</span>
                                </div>
                                <div>
                                    <input className={handleClasses("desc")} {...formik.getFieldProps("desc")} type="email" placeholder='Enter Email' />
                                    <span className="invalid-feedback">{formik.errors.email}</span>
                                </div>
                                <div>
                                    <select className={handleClasses("priority")} {...formik.getFieldProps("priority")}>
                                        <option value="">Choose Priority</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                    <span className="invalid-feedback">{formik.errors.depart}</span>
                                </div>
                                <div>
                                    <select className={handleClasses("employee")} {...formik.getFieldProps("employee")}>
                                        <option value="">Choose Employee</option>

                                    </select>
                                    <span className="invalid-feedback">{formik.errors.depart}</span>
                                </div>
                                {
                                    selectedTodo
                                        ? <button className='btn btn-warning' type='submit'>Update Todo</button>
                                        : <button className='btn btn-dark' type='submit'>Add Todo</button>
                                }


                            </form>
                        </div>
                    </div>
                    {/* <table class="table table-dark table-striped table-hover mt-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>task</th>
                                <th>desc</th>
                                <th>priority</th>
                                <th>employee</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos && todos.map(item => <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.task}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.priority}</td>
                                    <td>{item.employee}</td>
                                    <td>
                                        <button
                                            onClick={e => setSelectedTodo(item)}
                                            className='mx-2 btn btn-sm btn-outline-warning'>Edit</button>
                                        <button

                                            className='mx-2 btn btn-sm btn-outline-danger'>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table> */}

                </div>
            </div>
        </div>
    </>
}

export default Todo