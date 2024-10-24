import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import {
    useAddTodoMutation,
    useDeleteTodoMutation,
    useGetTodosQuery,
    useUdpateTodoMutation
} from '../redux/todoApi'

const Todo = () => {
    const { data } = useGetTodosQuery()
    const [addTodo, { isSuccess: addTodoSuccess }] = useAddTodoMutation()
    const [updateTodo, { isSuccess: updateTodoSuccess }] = useUdpateTodoMutation()
    const [deleteTodo, { isSuccess: deleteTodoSuccess }] = useDeleteTodoMutation()

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
            } else {
                addTodo(values)
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
        if (addTodoSuccess) {
            toast.success("Todo Create Success")
        }
    }, [addTodoSuccess])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card">
                            <div class="card-header">Fullstack Todo</div>
                            <div class="card-body">
                                <div>
                                    <input placeholder='Enter Task' type="text" className={handleClasses("task")} {...formik.getFieldProps("task")} />
                                    <span className="invalid-feedback">{formik.errors.task}</span>
                                </div>
                                <div>
                                    <input placeholder='Enter Desc' type="text" className={handleClasses("desc")} {...formik.getFieldProps("desc")} />
                                    <span className="invalid-feedback">{formik.errors.desc}</span>
                                </div>
                                <div>
                                    <select class={handleClasses("priority")} {...formik.getFieldProps("priority")}>
                                        <option selected>Choose Priority</option>
                                        <option value="high">high</option>
                                        <option value="medium">medium</option>
                                        <option value="low">low</option>
                                    </select>
                                    <span className="invalid-feedback">{formik.errors.priority}</span>
                                </div>
                                {
                                    selectedTodo
                                        ? <button type="submit" class="w-100 btn btn-warning">Update</button>
                                        : <button type="submit" class="w-100 btn btn-primary">Add</button>
                                }

                            </div>
                        </div>
                    </form>
                    {
                        data && <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>_id</th>
                                    <th>task</th>
                                    <th>desc</th>
                                    <th>priority</th>
                                    <th>actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.result.map(item => <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.task}</td>
                                        <td>{item.desc}</td>
                                        <td>{item.priority}</td>
                                        <td>
                                            <button onClick={e => setSelectedTodo(item)} type="button" class="btn-sm ms-2 btn btn-warning">Edit</button>
                                            <button onClick={e => deleteTodo(item._id)} type="button" class="btn-sm ms-2 btn btn-danger">Delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    }

                </div>
            </div>
        </div>
    </>
}

export default Todo