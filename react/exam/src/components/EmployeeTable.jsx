import React, { useContext, useEffect, useState } from 'react'
import api from '../utils/api'
import EmployeeForm from './EmployeeForm'
import { EmployeeContext } from '../pages/Employee'

const EmployeeTable = () => {
    const { success, setSuccess } = useContext(EmployeeContext)
    const [allEmployee, setAllEmployee] = useState([])
    const [selectedEmployee, setSelectedEmployee] = useState()
    const getAllEmployee = async e => {
        try {
            const { data } = await api.get("/employee")
            setAllEmployee(data)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteEmployee = async id => {
        try {
            const { data } = await api.delete("/employee/" + id)
            console.log("employee delete success");
            setSuccess(!success)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getAllEmployee() }, [success])
    return <>
        <table className='table table-dark table-bordered mt-2'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>date of joining</th>
                    <th>department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allEmployee.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.doj}</td>
                        <td>{item.depart}</td>
                        <td>
                            <button data-bs-toggle="modal" data-bs-target="#edit" onClick={e => setSelectedEmployee(item)} className='btn btn-warning btn-sm mx-2'>edit</button>
                            <button onClick={e => deleteEmployee(item.id)} className='btn btn-danger btn-sm mx-2'>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

        <div className="modal fade" id="edit">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <EmployeeForm selectedEmployee={selectedEmployee} />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default EmployeeTable