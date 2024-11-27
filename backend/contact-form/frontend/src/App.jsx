import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Success from './pages/Success'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Contact />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App