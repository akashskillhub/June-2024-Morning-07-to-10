import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'

const App = () => {
  return <>
    <BrowserRouter>
      <p> <Link to="/">Home</Link>  </p>
      <p> <Link to="/blogs">Blog</Link>  </p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App