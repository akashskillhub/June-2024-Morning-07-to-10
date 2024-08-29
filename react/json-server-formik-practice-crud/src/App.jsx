import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

const App = () => {
  return <>
    <BrowserRouter>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/products">Products</Link></p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App