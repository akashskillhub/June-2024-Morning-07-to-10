import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Products from './pages/Products'
import Notes from './pages/Notes'

const App = () => {
  return <>
    <BrowserRouter>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/users">Users</Link></p>
      <p><Link to="/products">Products</Link></p>
      <p><Link to="/notes">Notes</Link></p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App