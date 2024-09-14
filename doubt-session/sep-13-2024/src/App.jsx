import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'


const App = () => {
  return <>
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/todo">Todo</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App