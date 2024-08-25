import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import BasicValidation from './pages/BasicValidation'
import BasicFormik from './pages/BasicFormik'
import FormikPractice from './pages/FormikPractice'

const App = () => {
  return <>
    <BrowserRouter>
      <p> <Link to="/">Basic Validation</Link>  </p>
      <p> <Link to="/basic-formik">Basic Formik</Link>  </p>
      <p> <Link to="/formik-practice">Formik Practice</Link>  </p>
      <Routes>
        <Route path='/' element={<BasicValidation />} />
        <Route path='/basic-formik' element={<BasicFormik />} />
        <Route path='/formik-practice' element={<FormikPractice />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App