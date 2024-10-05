import clsx from 'clsx'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodoQuery, useUpdateTodoMutation } from '../redux/todoApi'

const Todo = () => {
    const { data, isError, error, isSuccess, isLoading } = useGetTodoQuery()
    const [createTodo, { isSuccess: addSuccess }] = useAddTodoMutation()
    const [removeTodo] = useDeleteTodoMutation()
    const [updateTodo] = useUpdateTodoMutation()
    const [selectedTodo, setSelectedTodo] = useState()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            task: selectedTodo ? selectedTodo.task : "",
            desc: selectedTodo ? selectedTodo.desc : "",
            priority: selectedTodo ? selectedTodo.priority : "",
        },
        validationSchema: yup.object({
            task: yup.string().required("Enter task"),
            desc: yup.string().required("Enter desc"),
            priority: yup.string().required("Enter priority"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedTodo) {
                updateTodo({ ...selectedTodo, ...values })
                setSelectedTodo(null)
                console.log("Update");
            } else {
                createTodo(values)
                console.log("Add");
            }
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    if (isLoading) {
        return <div>
            Please wait <div class="spinner-border text-primary"></div>
        </div>
    }
    return <div className="container my-5">
        <div className="row">
            <div className="col-sm-8 offset-sm-2">
                <div class="card">
                    <div class="card-header">Todo</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card-body">
                            <div>
                                <input
                                    placeholder='Enter Your task'
                                    type="text"
                                    className={handleClasses("task")}
                                    {...formik.getFieldProps("task")} />
                                <span className="invalid-feedback">{formik.errors.task}</span>
                            </div>
                            <div>
                                <input
                                    placeholder='Enter Your task Description'
                                    type="text"
                                    className={handleClasses("desc")}
                                    {...formik.getFieldProps("desc")} />
                                <span className="invalid-feedback">{formik.errors.desc}</span>
                            </div>
                            <div>
                                <select
                                    className={handleClasses("priority")}
                                    {...formik.getFieldProps("priority")} >
                                    <option value="">Choose Priority</option>
                                    <option value="high">high</option>
                                    <option value="medium">medium</option>
                                    <option value="low">low</option>
                                </select>
                                <span className="invalid-feedback">{formik.errors.priority}</span>
                            </div>
                            {
                                selectedTodo
                                    ? <button type="submit" className="w-100 btn-lg btn btn-warning">Update Todo</button>
                                    : <button type="submit" className="w-100 btn-lg btn btn-primary">Add Todo</button>
                            }
                        </div>
                    </form>
                </div>

                {
                    data && <table class="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task</th>
                                <th>Desc</th>
                                <th>Priority</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.task}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.priority}</td>
                                    <td>
                                        <button onClick={e => setSelectedTodo(item)} className='mx-2 btn-sm btn btn-outline-warning'> <i className="bi bi-pencil"></i> </button>
                                        <button onClick={e => removeTodo(item.id)} className='mx-2 btn-sm btn btn-outline-danger'> <i className="bi bi-trash"></i> </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    </div>
}

export default Todo