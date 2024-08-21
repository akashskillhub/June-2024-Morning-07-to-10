import React from 'react'
import Home from './pages/public/Home'
import PublicLayout from './components/PublicLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/public/Contact'
import AdminLayout from './components/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Products from './pages/admin/Products'
import UserLayout from './components/UserLayout'
import Account from './pages/user/Account'
import Profile from './pages/user/Profile'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />} >
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>

        <Route path='/user' element={<UserLayout />} >
          <Route index element={<Account />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App