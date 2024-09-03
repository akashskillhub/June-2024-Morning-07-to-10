import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Students from './pages/Students'

const App = () => {
  return <>
    <BrowserRouter>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/students">Students</Link></p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/students' element={<Students />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App