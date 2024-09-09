import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ToastPractice from './pages/ToastPractice'

// toast
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.min.css"
import Todo from './pages/Todo'

const App = () => {
  return <>
    <ToastContainer position='bottom-right' autoClose={1000} theme='dark' />
    <BrowserRouter>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/toast">toast</Link></p>
      <p><Link to="/todo">todo</Link></p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/toast' element={<ToastPractice />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App