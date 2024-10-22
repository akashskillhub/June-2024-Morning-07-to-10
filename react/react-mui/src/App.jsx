import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import M_button from './pages/M_button'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import M_Input from './pages/M_Input';
import M_Avatar from './pages/M_Avatar';
import M_Alert from './pages/M_Alert';
import M_Snackbar from './pages/M_Snackbar';
import M_Drawer from './pages/M_Drawer';


const App = () => {
  6
  return <>
    <BrowserRouter>
      <Link to="/">button</Link>
      <Link to="/input">input</Link>
      <Link to="/avatar">avatar</Link>
      <Link to="/alert">alert</Link>
      <Link to="/snackbar">snackbar</Link>
      <Link to="/drawer">drawer</Link>
      <hr />
      <Routes>
        <Route path='/' element={<M_button />} />
        <Route path='/input' element={<M_Input />} />
        <Route path='/avatar' element={<M_Avatar />} />
        <Route path='/alert' element={<M_Alert />} />
        <Route path='/snackbar' element={<M_Snackbar />} />
        <Route path='/drawer' element={<M_Drawer />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App