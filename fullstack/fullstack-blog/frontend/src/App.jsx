import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Navbar from './components/Navbar'

import "react-toastify/ReactToastify.min.css"
import { ToastContainer } from "react-toastify"
import Home from './pages/Home'
const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App