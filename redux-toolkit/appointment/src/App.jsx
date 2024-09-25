import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/public/PublicLayout'
import Home from './pages/public/Home'
import About from './pages/public/About'
import Contact from './pages/public/Contact'
import AdminLayout from './components/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Booking from './pages/admin/Booking'
import Patients from './pages/admin/Patients'
import PatientLayout from './components/patient/PatientLayout'
import Account from './pages/patients/Account'
import History from './pages/patients/History'
import AdminLogin from './pages/admin/AdminLogin'
import Login from './pages/patients/Login'
import Register from './pages/patients/Register'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.min.css"
import AdminProtected from './share/AdminProtected'
import PatientProtected from './share/PatientProtected'
const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='admin-login' element={<AdminLogin />} />
          <Route path='patient-login' element={<Login />} />
          <Route path='patient-register' element={<Register />} />

        </Route>

        <Route path='/admin' element={<AdminProtected compo={<AdminLayout />} />}>
          <Route index element={<Dashboard />} />
          <Route path='bookings' element={<Booking />} />
          <Route path='patients' element={<Patients />} />
        </Route>

        <Route path='/patient' element={<PatientProtected compo={<PatientLayout />} />}>
          <Route index element={<Account />} />
          <Route path='history' element={<History />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App