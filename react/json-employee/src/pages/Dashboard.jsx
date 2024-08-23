import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [selectedEmployee, setSelectedEmployee] = useState({
        name: "",
        gender: "",
        department: "",
        doj: ""
    })

    const [employeeData, setEmployeeData] = useState({})
    const [employees, setEmployees] = useState([])

    const BASE_URL = "http://localhost:5000/employees/"

    const createEmployee = async () => {
        try {
            await axios.post(BASE_URL, employeeData)
            console.log("Employee Create Success");
            readEmployees()
        } catch (error) {
            console.log(error)
        }
    }
    const readEmployees = async () => {
        try {
            const { data } = await axios.get(BASE_URL)
            setEmployees(data)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteEmployee = async id => {
        try {
            await axios.delete(BASE_URL + id)
            console.log("Employee Delete Sucess")
            readEmployees()
        } catch (error) {
            console.log(error)
        }
    }
    const updateEmployee = async () => {
        try {
            await axios.patch(BASE_URL + selectedEmployee.id, selectedEmployee)
            console.log("employee update success");
            readEmployees()
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = e => {
        const { name, value } = e.target
        setEmployeeData({ ...employeeData, [name]: value })
    }
    useEffect(() => {
        readEmployees()
    }, [])
    return <>
        <pre>{JSON.stringify(selectedEmployee, null, 2)}</pre>
        <input onChange={handleChange} type="text" name="name" placeholder='Enter Employee Name' />

        <hr />
        <input onChange={handleChange} type="radio" name='gender' id='m' value="male" />
        <label htmlFor="m">male</label>

        <input onChange={handleChange} type="radio" name='gender' id='f' value="female" />
        <label htmlFor="f">female</label>
        <hr />
        <select onChange={handleChange} name="department" >
            <option value="">Choose Department</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="devops">Devops</option>
            <option value="sales">Sales</option>
        </select>
        <hr />
        <input onChange={handleChange} type="date" name="doj" />
        <button onClick={createEmployee}>add employee</button>

        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>gender</th>
                    <th>department</th>
                    <th>date of joining</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.department}</td>
                        <td>{item.doj}</td>
                        <td>
                            <button onClick={e => setSelectedEmployee(item)}>edit</button>
                            <button onClick={e => deleteEmployee(item.id)}>delete</button>
                        </td>

                    </tr>)
                }
            </tbody>

        </table>
        {/* 
                 step 1 create a variable selectedEmplyee
                 step 1 create a form with name gender deparet. doj
        */}

        <input
            type="text"
            value={selectedEmployee.name}
            onChange={e => setSelectedEmployee({ ...selectedEmployee, name: e.target.value })} />

        <input
            onChange={e => setSelectedEmployee({ ...selectedEmployee, gender: e.target.value })}
            checked={selectedEmployee.gender === "male"}
            type="radio"
            id='em'
            name='gender'
            value="male" />
        <label htmlFor="em">male</label>

        <input
            onChange={e => setSelectedEmployee({ ...selectedEmployee, gender: e.target.value })}
            checked={selectedEmployee.gender === "female"}
            type="radio"
            id='ef'
            name='gender'
            value="female" />
        <label htmlFor="ef">female</label>

        <select
            onChange={e => setSelectedEmployee({ ...selectedEmployee, department: e.target.value })}
            value={selectedEmployee.department}
        >
            <option value="">choose department</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="devops">Devops</option>
            <option value="sales">Sales</option>
        </select>
        <input
            onChange={e => setSelectedEmployee({ ...selectedEmployee, doj: e.target.value })}
            type="date"
            value={selectedEmployee.doj} />
        <button onClick={updateEmployee}>update</button>


    </>
}

export default Dashboard