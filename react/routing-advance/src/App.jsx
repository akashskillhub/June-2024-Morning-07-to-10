import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Settings from './pages/Settings'
import Orders from './pages/Orders'
import AdminLayout from './components/AdminLayout'
import UserLayout from './components/UserLayout'

const App = () => {

  // useEffect
  return <>
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/admin">Dashboard</Link>
      <Link to="/admin/profile">Account</Link>

      <Link to="/user/settings">user setting</Link>
      <Link to="/user/orders">user orders</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='profile' element={<Account />} />
        </Route>

        <Route path='/user' element={<UserLayout />}>
          <Route path='settings' element={<Settings />} />
          <Route path='orders' element={<Orders />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App