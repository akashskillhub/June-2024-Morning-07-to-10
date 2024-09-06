import clsx from 'clsx'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { addTodo, getAllTodo } from '../redux/actions/todoActions'
import { useEffect } from 'react'

const Todo = () => {
    const callAction = useDispatch()
    const formik = useFormik({
        initialValues: {
            task: "",
            desc: "",
            priority: "",
        },
        validationSchema: yup.object({
            task: yup.string().required("Enter task"),
            desc: yup.string().required("Enter desc"),
            priority: yup.string().required("Enter priority"),
        }),
        onSubmit: (values, { resetForm }) => {
            callAction(addTodo(values))
            resetForm()
        }
    })
    const handleClasses = arg => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[arg] && formik.errors[arg],
        "is-valid": formik.touched[arg] && !formik.errors[arg],
    })

    useEffect(() => {
        callAction(getAllTodo())
    }, [])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    className={handleClasses("task")}
                    {...formik.getFieldProps("task")}
                    type="text"
                    placeholder='Enter Task' />
                <span className='invalid-feedback'>{formik.errors.task}</span>
            </div>
            <div>
                <textarea
                    className={handleClasses("desc")}
                    {...formik.getFieldProps("desc")}
                    placeholder='Enter Description'></textarea>
                <span className='invalid-feedback'>{formik.errors.desc}</span>
            </div>
            <div>
                <select
                    className={handleClasses("priority")}
                    {...formik.getFieldProps("priority")}>
                    <option value="">Choose Priority</option>
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>
                <span className='invalid-feedback'>{formik.errors.priority}</span>
            </div>
            <button type='submit'>Add Todo</button>
        </form>
    </>
}

export default Todo