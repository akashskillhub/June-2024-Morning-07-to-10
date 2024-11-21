import React from 'react'
import Blogs from './pages/Blogs'
import "react-toastify/ReactToastify.min.css"
import { ToastContainer } from 'react-toastify'

const App = () => {
  return <>
    <ToastContainer />
    <Blogs />
  </>
}

export default App