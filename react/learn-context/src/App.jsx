import React, { createContext } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Parent from './pages/Parent'

export const TestContext = createContext()

const App = () => {
  const z = "apple"
  const demo = "lorem ipsum"
  return <TestContext.Provider value={demo}>
    <BrowserRouter>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/parent">Parent</Link></p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/parent' element={<Parent brand={z} />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </TestContext.Provider>
}

export default App