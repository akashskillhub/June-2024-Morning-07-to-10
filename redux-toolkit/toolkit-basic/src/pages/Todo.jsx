import clsx from 'clsx'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { addTodo, deleteTodo, getTodo } from '../redux/todoActions'

const Todo = () => {
    const callAction = useDispatch()
    const { todos } = useSelector(state => state.allTodos)

    const [selectedTodo, setSelectedTodo] = useState()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            task: selectedTodo ? selectedTodo.task : "",
        },
        validationSchema: yup.object({
            task: yup.string().required("Enter task"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedTodo) {
                // update goes here
            } else {
                // add goes here
                callAction(addTodo(values))
            }
            resetForm()
        }
    })
    const handleClasses = arg => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[arg] && formik.errors[arg],
        "is-valid": formik.touched[arg] && !formik.errors[arg],
    })

    useEffect(() => { callAction(getTodo()) }, [])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    type="text"
                    {...formik.getFieldProps("task")}
                    className={handleClasses("task")} />
                <span className='invalid-feedback'>{formik.errors.task}</span>
            </div>
            <button type='submit'>Add</button>
        </form>
        <table border={1}>
            <thead>
                <tr>

                    <th>id</th>
                    <th>task</th>
                    <th>ations</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos && todos.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.task}</td>
                        <td>
                            <button>edit</button>
                            <button onClick={e => callAction(deleteTodo(item.id))}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Todo