import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PublicNavbar from './components/PublicNavbar'
import LearnLocalStorage from './pages/LearnLocalStorage'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<> <PublicNavbar /> <Outlet /> </>}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='local' element={<LearnLocalStorage />} />
        </Route>
        <Route path='/admin' element={<></>}>
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App