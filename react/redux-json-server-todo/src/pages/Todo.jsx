import clsx from 'clsx'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { addTodo, deleteTodo, getTodo, updateTodo } from '../redux/actions/todoActions'
import { useEffect, useState } from 'react'

const Todo = () => {
    const [selectedTodo, setSelectedTodo] = useState()
    const callAction = useDispatch()
    const {
        todos,
        todoCreate,
        todoUpdate,
        todoDelete,
        error
    } = useSelector(state => state.allTodos)

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
                callAction(updateTodo({ ...selectedTodo, ...values }))
            } else {
                callAction(addTodo(values))
            }
            setSelectedTodo(null)
            resetForm()
        }
    })
    const handleClasses = arg => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[arg] && formik.errors[arg],
        "is-valid": formik.touched[arg] && !formik.errors[arg],
    })

    useEffect(() => {
        callAction(getTodo())
    }, [todoCreate, todoUpdate, todoDelete,])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    {...formik.getFieldProps("task")}
                    className={handleClasses("task")}
                    type="text" placeholder='Enter Task' />
                <span className='invalid-feedback'>{formik.errors.task}</span>
            </div>
            <div>
                <textarea
                    {...formik.getFieldProps("desc")}
                    className={handleClasses("desc")}
                    placeholder='Enter Desc'></textarea>
                <span className='invalid-feedback'>{formik.errors.desc}</span>
            </div>
            <div>
                <select {...formik.getFieldProps("priority")} className={handleClasses("priority")}>
                    <option value="">Choose Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <span className='invalid-feedback'>{formik.errors.priority}</span>
            </div>
            {
                selectedTodo
                    ? <button type='submit' className='btn btn-warning '>Update Todo</button>
                    : <button type='submit' className='btn btn-dark '>Add Todo</button>
            }

        </form>

        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>task</th>
                    <th>desc</th>
                    <th>priority</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.task}</td>
                        <td>{item.desc}</td>
                        <td>{item.priority}</td>
                        <td>
                            <button onClick={e => setSelectedTodo(item)}>edit</button>
                            <button onClick={e => callAction(deleteTodo(item.id))}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Todo