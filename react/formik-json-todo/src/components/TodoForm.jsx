import axios from "axios"
import { useFormik } from "formik"
import * as yup from "yup"

const TodoForm = ({ toggleFn, success, selectedTodo }) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            task: selectedTodo ? selectedTodo.task : "",
            desc: selectedTodo ? selectedTodo.desc : "",
            priority: selectedTodo ? selectedTodo.priority : "",
        },
        validationSchema: yup.object({
            task: yup.string().required("Enter Task"),
            desc: yup.string().required("Enter Desc"),
            priority: yup.string().required("Enter Priority"),
        }),
        onSubmit: async (values, { resetForm }) => {
            if (selectedTodo) {
                await axios.patch("http://localhost:5000/notes/" + selectedTodo.id, values)
                console.log("Note update Success")
            } else {
                await axios.post("http://localhost:5000/notes", values)
                console.log("Note Create Success")
            }
            toggleFn()
            resetForm()
        }
    })
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    className={`form-control my-2 ${formik.touched.task && formik.errors.task && "is-invalid"}`}
                    type="text"
                    {...formik.getFieldProps("task")} />

                <span className='invalid-feedback'>{formik.errors.task}</span>
            </div>
            <div>
                <input
                    className={`form-control my-2 ${formik.touched.desc && formik.errors.desc && "is-invalid"}`}
                    type="text"
                    {...formik.getFieldProps("desc")} />
                <span className='invalid-feedback'>{formik.errors.desc}</span>
            </div>
            <div>
                <select
                    className={`form-control my-2 ${formik.touched.priority && formik.errors.priority && "is-invalid"}`}
                    {...formik.getFieldProps("priority")}
                >
                    <option>Choose Priority</option>
                    <option value="High">High</option>
                    <option value="Meduim">Meduim</option>
                    <option value="Low">Low</option>
                </select>
                <span className='invalid-feedback'>{formik.errors.priority}</span>
            </div>
            {
                selectedTodo
                    ? <button data-bs-dismiss="modal" className='btn btn-warning w-100 my-2' type='submit'>Update Todo</button>
                    : <button className='btn btn-dark w-100 my-2' type='submit'>Add Todo</button>
            }

        </form>
    </>
}

export default TodoForm