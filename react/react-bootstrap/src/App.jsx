import React from 'react'
import Test from './componenets/Test'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './componenets/Menu'
import RBS_Button from './pages/RBS_Button'
import RBS_Alert from './pages/RBS_Alert'
import RBS_Collapse from './pages/RBS_Collapse'
import RBS_Offcanvas from './pages/RBS_Offcanvas'
import RBS_Modal from './pages/RBS_Modal'
import RBS_Grid from './pages/RBS_Grid'
import RBS_Form from './pages/RBS_Form'

const App = () => {
  return <>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<RBS_Button />} />
        <Route path='/alert' element={<RBS_Alert />} />
        <Route path='/collapse' element={<RBS_Collapse />} />
        <Route path='/offcanvas' element={<RBS_Offcanvas />} />
        <Route path='/modal' element={<RBS_Modal />} />
        <Route path='/grid' element={<RBS_Grid />} />
        <Route path='/form' element={<RBS_Form />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App