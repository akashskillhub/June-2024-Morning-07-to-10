import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

const App = () => {
  return <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/reach-us' element={<Contact></Contact>}></Route>
      <Route path='/admin' element={<Dashboard></Dashboard>}></Route>
      <Route path='*' element={<h1>404 No Page Found</h1>}></Route>
    </Routes>
  </BrowserRouter>
}

export default App