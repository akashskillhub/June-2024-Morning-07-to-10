import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/PublicLayout'
import Home from './pages/public/Home'
import Contact from './pages/public/Contact'
import AdminLayout from './components/AdminLayout'
import Dahsboard from './pages/admin/Dahsboard'
import Products from './pages/admin/Products'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dahsboard />} />
          <Route path='products' element={<Products />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter >
  </>
}

export default App