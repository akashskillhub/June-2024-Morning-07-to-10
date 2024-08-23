import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Test from './pages/Test'

const App = () => {
  return <>
    <BrowserRouter>
      <p> <Link to="/">Home</Link>  </p>
      <p> <Link to="/admin">Dashboard</Link>  </p>
      <p> <Link to="/test">test</Link>  </p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App