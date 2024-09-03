import React, { createContext, useState } from 'react'
import EmployeeForm from '../components/EmployeeForm'
import EmployeeTable from '../components/EmployeeTable'

export const EmployeeContext = createContext()
const Employee = () => {
    const [success, setSuccess] = useState(true)
    return <EmployeeContext.Provider value={{ success, setSuccess }}>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <h1 className='my-3'>Task Duration: 1 hours 30 Min. </h1>
                    <div className="card">
                        <div className="card-header">Employee</div>
                        <div className="card-body">
                            <EmployeeForm />
                        </div>
                    </div>
                    <EmployeeTable />
                </div>
            </div>
        </div>
    </EmployeeContext.Provider>
}

export default Employee