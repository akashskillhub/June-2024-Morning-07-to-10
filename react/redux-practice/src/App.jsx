import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Bank from './pages/Bank'

const App = () => {
  return <>
    <BrowserRouter>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/bank">bank</Link></p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bank' element={<Bank />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App