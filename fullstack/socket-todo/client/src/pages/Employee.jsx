import React, { useState } from 'react'
import { useEmployeeregisterMutation } from '../redux/authApi'
import { useGetAdminEmployeeQuery } from '../redux/adminApi'

const Employee = () => {
    const [registerEmployee, { isSuccess }] = useEmployeeregisterMutation()
    const [employeeData, setEmployeeData] = useState({})
    const handleChange = e => {
        const { name, value } = e.target
        setEmployeeData({ ...employeeData, [name]: value })
    }
    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">register employee</div>
                        <div class="card-body">

                            <div class="mt-2">
                                <label for="password" class="form-label">name</label>
                                <input
                                    name='name'
                                    onChange={handleChange}
                                    type="text"
                                    class="form-control"
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div>
                                <label for="email" class="form-label">Email</label>
                                <input
                                    name='email'
                                    onChange={handleChange}
                                    type="text"
                                    class="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>

                            <button onClick={e => registerEmployee(employeeData)} type="button" class="btn btn-primary w-100 mt-3">
                                register employee
                            </button>

                        </div>
                    </div>
                    <EmployeeTable />
                </div>
            </div>
        </div>
    </>
}

const EmployeeTable = () => {
    const { data } = useGetAdminEmployeeQuery()
    return data && <table className='table table-bordered mt-5'>
        <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>isActive</th>
            </tr>
        </thead>
        <tbody>
            {
                data.result.map(item => <tr
                    key={item._id}
                    className={`${item.isActive ? "table-success" : "table-danger"}`}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.isActive ? "Yes" : "No"}</td>
                </tr>)
            }
        </tbody>
    </table>
}

export default Employee