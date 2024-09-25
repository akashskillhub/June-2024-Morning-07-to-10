import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { employeeCompleteTodo, employeeGetTodos } from '../../redux/employeeActions'

const Account = () => {
    const dispatch = useDispatch()
    const { todos, todoComplete } = useSelector(state => state.employee)

    useEffect(() => {
        dispatch(employeeGetTodos())
    }, [todoComplete])
    return <>
        <div className="container mt-5">

            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th >#</th>
                        <th >task</th>
                        <th >desc</th>
                        <th >priority</th>
                        <th >complete</th>
                        <th >actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos && todos.map(item => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>{
                                item.complete
                                    ? <span class="badge text-bg-primary">Complete</span>
                                    : <span>
                                        <div class="spinner-border text-primary spinner-border-sm"></div>
                                        <span>Pending</span>
                                    </span>
                            }</td>
                            <td>
                                {
                                    !item.complete && <button
                                        onClick={e => dispatch(employeeCompleteTodo({ ...item, complete: true }))}
                                        className='btn btn-warning' >Mark Complete</button>
                                }

                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    </>
}

export default Account