import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Counter from './pages/Counter'

export const UserContext = createContext()
const App = () => {
  const logginUser = { name: "joh doe", role: "user" }
  return <UserContext.Provider value={{ logginUser }}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </UserContext.Provider>
}

export default App