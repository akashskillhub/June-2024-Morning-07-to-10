import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/public/Home'
import Details from './pages/public/Details'
import Cart from './pages/public/Cart'
import NotFound from './pages/share/NotFound'
import PublicLayout from './components/public/PublicLayout'
import Signin from './pages/public/Signin'
import Register from './pages/public/Register'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path='/login' element={<Signin />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App