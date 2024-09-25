import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/PublicLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import AdminLayout from './components/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.min.css"
import AdminLogin from './pages/AdminLogin'
import Protected from './share/Protected'
import Users from './pages/admin/Users'
import Todo from './pages/admin/Todo'
import EmployeeLayout from './components/EmployeeLayout'
import Account from './pages/employee/Account'
import EmployeeProtected from './share/EmployeeProtected'

const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='admin-login' element={<AdminLogin />} />
        </Route>

        <Route path='/admin' element={<Protected compo={<AdminLayout />} />}>
          <Route index element={<Dashboard />} />
          <Route path='users' element={<Users />} />
          <Route path='todos' element={<Todo />} />
        </Route>

        <Route path='/employee' element={<EmployeeProtected compo={<EmployeeLayout />} />}>
          <Route index element={<Account />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App