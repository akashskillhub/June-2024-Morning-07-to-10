import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Employee from './pages/Employee'

const App = () => {
  return <>
    <BrowserRouter>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/emp">Employee</Link></p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/emp' element={<Employee />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App