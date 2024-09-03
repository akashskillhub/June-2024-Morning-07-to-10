import React, { createContext, useState } from 'react'
import StudentForm from '../components/StudentForm'
import StudentTable from '../components/StudentTable'

export const StudentContext = createContext()
const Students = () => {
    const [success, setSuccess] = useState(true)
    return <StudentContext.Provider value={{ success, setSuccess }}>
        <StudentForm />
        <StudentTable />
    </StudentContext.Provider>
}

export default Students