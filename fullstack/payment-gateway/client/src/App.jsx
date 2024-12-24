import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Success from './pages/Success'

const App = () => {
  return <>
    <BrowserRouter>
      <div className='d-flex'>
        <Link className='nav-link me-2' to="/">home</Link>
        <Link className='nav-link me-2' to="/checkout">checkout</Link>
        <Link className='nav-link me-2' to="/success">success</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App