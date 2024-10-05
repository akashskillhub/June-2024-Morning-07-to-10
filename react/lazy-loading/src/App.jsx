import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'

const App = () => {
  return <>
    <BrowserRouter>
      <p><Link to="/">home</Link></p>
      <p><Link to="/about">about</Link></p>
      <p><Link to="/contact">conatct</Link></p>
      <Routes>
        <Route path='/' element={<Suspense fallback={<p>Please Wait Loading...</p>}>
          <Home />
        </Suspense>} />

        <Route path='/about' element={<Suspense fallback={<p>Please Wait Loading...</p>}>
          <About />
        </Suspense>} />

        <Route path='/contact' element={<Suspense fallback={<p>Please Wait Loading...</p>}>
          <Contact />
        </Suspense>} />

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App