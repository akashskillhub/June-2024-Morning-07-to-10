import React, { useContext, useEffect, useState } from 'react'
import api from '../utils/api'
import { StudentContext } from '../pages/Students'
import StudentForm from './StudentForm'

const StudentTable = () => {
    const [allStudents, setAllStudents] = useState([])
    const { success, setSuccess } = useContext(StudentContext)
    const [selectedStudent, setSelectedStudent] = useState()
    const getAllStudents = async () => {
        try {
            const { data } = await api.get("/students")
            setAllStudents(data)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteStudent = async id => {
        try {
            await api.delete("/students/" + id)
            setSuccess(!success)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getAllStudents() }, [success])
    return <>
        <table className='table table-bordered table-dark'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allStudents.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>
                            <button onClick={e => setSelectedStudent(item)} data-bs-toggle="modal" data-bs-target="#edit">edit</button>
                            <button onClick={e => deleteStudent(item.id)}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>

        </table>

        <div className="modal fade" id="edit" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <StudentForm selectedStudent={selectedStudent} />
                    </div>

                </div>
            </div>
        </div >
    </>
}

export default StudentTable