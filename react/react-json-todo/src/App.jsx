import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import UserTodos from './pages/UserTodos'

const App = () => {
  return <>
    <BrowserRouter>
      <p> <Link to="/">Home</Link> </p>
      <p> <Link to="/todo">Todo</Link> </p>
      <p> <Link to="/user-todo">User Todo</Link> </p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/user-todo' element={<UserTodos />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App