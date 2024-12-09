import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/public/Home'
import Details from './pages/public/Details'
import Cart from './pages/public/Cart'
import NotFound from './pages/share/NotFound'
import PublicLayout from './components/public/PublicLayout'
import Signin from './pages/public/Signin'
import Register from './pages/public/Register'
import Dashboard from './pages/admin/Dashboard'
import AdminLayout from './components/admin/AdminLayout'
import Checkout from './pages/user/Checkout'
import Products from './pages/admin/Products'
import Users from './pages/admin/Users'
import Orders from './pages/admin/Orders'
import Success from './pages/user/Success'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'
import AdminLogin from './pages/public/AdminLogin'
import AdminProtected from './pages/share/AdminProtected'

const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="details/:pid" element={<Details />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
        </Route>
        <Route path='/admin' element={<AdminProtected compo={<AdminLayout />} />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
        </Route>

        <Route path='/login' element={<Signin />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App