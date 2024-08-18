import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PracticeEffect from './pages/PracticeEffect'
import Timer from './pages/Timer'
import LearnAxios from './pages/LearnAxios'

const App = () => {

  // HTML manipulation
  // CSS manipulation
  // Handle External Resources
  return <>
    <BrowserRouter>
      <p> <Link to="/">Home</Link>  </p>
      <p> <Link to="/about">About</Link>  </p>
      <p> <Link to="/practice">Practice</Link>  </p>
      <p> <Link to="/timer">Timer</Link>  </p>
      <p> <Link to="/axios">Axios</Link>  </p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/practice' element={<PracticeEffect />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/axios' element={<LearnAxios />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App