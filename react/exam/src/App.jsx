import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calculator from './pages/Calculator'
import Navbar from './components/Navbar'
import Employee from './pages/Employee'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Calculator />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App