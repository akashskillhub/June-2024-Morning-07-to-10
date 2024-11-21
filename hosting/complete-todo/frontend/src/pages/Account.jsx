import { useFormik } from "formik"
import * as yup from "yup"
import { Link } from "react-router-dom"
import clsx from 'clsx'
import { useSelector } from "react-redux"
import { useSingoutMutation } from "../redux/apis/authApi"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useLazyGetTodosQuery, useUpdateTodoMutation } from "../redux/apis/todoApi"

const Account = () => {
    return <>
        <Navbar />
        <Todos />
    </>
}

const Navbar = () => {
    const { user } = useSelector(state => state.auth)
    const [signout, { isSuccess }] = useSingoutMutation()
    useEffect(() => {
        if (isSuccess) {
            toast.success("logout success")
        }
    }, [isSuccess])
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/account" className="nav-link active">Home</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                    welcome {user && user.name}
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><button className="dropdown-item" onClick={signout} >logout</button></li>
                </ul>
            </div>
        </div>
    </nav>
}

const Todos = () => {
    const [selectedTodo, setSelectedTodo] = useState()
    const [getTodo, { data }] = useLazyGetTodosQuery()
    const [addTodo, {
        isSuccess: addSuccess,
        isLoading: isAddLoading,
        isError: isAddError,
        error: addError
    }] = useAddTodoMutation()
    const [updateTodo, {
        isSuccess: updateSuccess,
        isLoading: isupdateLoading,
        isError: isupdateError,
        error: updateError
    }] = useUpdateTodoMutation()
    const [deleteTodo, {
        isSuccess: deleteSuccess,
        isLoading: isDeleteLoading,
        isError: isDeleteError,
        error: deleteError
    }] = useDeleteTodoMutation()

    const cn = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
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
                updateTodo({ ...values, _id: selectedTodo._id })
                setSelectedTodo(null)
            } else {
                addTodo(values)
            }
            resetForm()
        }
    })
    useEffect(() => {
        getTodo()
    }, [])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Todo</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">
                                <div className="form-floating">
                                    <input
                                        name="task"
                                        type="text"
                                        className={cn("task")}
                                        {...formik.getFieldProps("task")}
                                        id="task"
                                        placeholder="Enter Your task"
                                    />
                                    <label htmlFor="task" className="form-label">First task</label>
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please add task.</div>
                                </div>
                                <div className="mt-2 form-floating">
                                    <input
                                        name="desc"
                                        type="text"
                                        className={cn("desc")}
                                        {...formik.getFieldProps("desc")}
                                        id="desc"
                                        placeholder="Enter task description"
                                    />
                                    <label htmlFor="desc" className="form-label">Description</label>
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please add description</div>
                                </div>
                                <div className="mt-2 form-floating">
                                    <select className={cn("priority")}
                                        {...formik.getFieldProps("priority")} name="priority" id="priority">
                                        <option selected>Select Priority</option>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                    <label htmlFor="priority"> Priority</label>
                                </div>
                                {
                                    selectedTodo
                                        ? <button type="submit" className="btn btn-warning w-100 mt-3">
                                            Update Todo
                                        </button>
                                        : <button type="submit" className="btn btn-primary w-100 mt-3">
                                            Add Todo
                                        </button>
                                }

                            </div>
                        </form>
                    </div>

                    <table class="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Desc</th>
                                <th>Priority</th>
                                <th>Complete</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.result.map(item => <tr key={item._id}>
                                    <td>{item.task}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.priority}</td>
                                    <td>{item.complete ? "Yes" : "No"}</td>
                                    <td>
                                        <button onClick={e => setSelectedTodo(item)} type="button" class="btn mx-2 btn-outline-warning">Edit</button>
                                        <button onClick={e => deleteTodo(item._id)} type="button" class="btn mx-2 btn-outline-danger">Delete</button>
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


export default Account