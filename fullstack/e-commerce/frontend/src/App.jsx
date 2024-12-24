import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Home = lazy(() => import('./pages/public/Home'))
const Details = lazy(() => import('./pages/public/Details'))
const Cart = lazy(() => import('./pages/public/Cart'))
const PublicLayout = lazy(() => import('./components/public/PublicLayout'))
const Signin = lazy(() => import('./pages/public/Signin'))
const Register = lazy(() => import('./pages/public/Register'))
const AdminLogin = lazy(() => import('./pages/public/AdminLogin'))

const Dashboard = lazy(() => import('./pages/admin/Dashboard'))
const Products = lazy(() => import('./pages/admin/Products'))
const Orders = lazy(() => import('./pages/admin/Orders'))
const Users = lazy(() => import('./pages/admin/Users'))

const OrderHistory = lazy(() => import('./pages/user/OrderHistory'))
const UserProfile = lazy(() => import('./pages/user/UserProfile'))
const Checkout = lazy(() => import('./pages/user/Checkout'))
const Success = lazy(() => import('./pages/user/Success'))
const NotFound = lazy(() => import('./pages/share/NotFound'))

const AdminLayout = lazy(() => import('./components/admin/AdminLayout'))
const AdminProtected = lazy(() => import('./pages/share/AdminProtected'))
const CustomerProtected = lazy(() => import('./pages/share/CustomerProtected'))
const UserLayout = lazy(() => import('./components/user/UserLayout'))

import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'
import { ErrorBoundary } from "react-error-boundary"


const App = () => {
  const uniqueRoutes = [
    { path: "login", isIndex: false, element: <Signin /> },
    { path: "admin-login", isIndex: false, element: <AdminLogin /> },
    { path: "register", isIndex: false, element: <Register /> },
    { path: "*", isIndex: false, element: <NotFound /> },
  ]
  const publicRoutes = [
    { path: "/", isIndex: true, element: <Home /> },
    { path: "details/:pid", isIndex: false, element: <Details /> },
    { path: "cart", isIndex: false, element: <Cart /> },
    { path: "success", isIndex: false, element: <Success /> },
    { path: "checkout", isIndex: false, element: <CustomerProtected compo={<Checkout />} /> },
  ]
  const adminRoutes = [
    { path: "/", isIndex: true, element: <Dashboard /> },
    { path: "products", isIndex: false, element: <Products /> },
    { path: "users", isIndex: false, element: <Users /> },
    { path: "orders", isIndex: false, element: <Orders /> },
  ]
  const customerRoutes = [
    { path: "/", isIndex: true, element: <OrderHistory /> },
    { path: "profile", isIndex: false, element: <UserProfile /> },
  ]

  const SuspenseFallback = () => {
    return <div>Please Wait...</div>
  }

  const ErrorFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
      resetErrorBoundary() // 👈 unmount and then mount component again
    }, [error])
    return <div>
      Error occured : {error.message}
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  }
  return <>
    <ToastContainer />
    <Suspense fallback={<SuspenseFallback />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicLayout />}>
            {
              publicRoutes.map(item => item.isIndex
                ? <Route
                  index
                  element={<ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<SuspenseFallback />} >{item.element}</Suspense>
                  </ErrorBoundary>} />
                : <Route
                  path={item.path}
                  element={<ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<SuspenseFallback />} >{item.element}</Suspense>
                  </ErrorBoundary>} />
              )
            }
          </Route>
          <Route path='/admin' element={<AdminProtected compo={<AdminLayout />} />}>
            {
              adminRoutes.map(item => item.isIndex
                ? <Route
                  index
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SuspenseFallback />} >{item.element}</Suspense>
                    </ErrorBoundary>
                  }
                />
                : <Route
                  path={item.path}
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SuspenseFallback />} >{item.element}</Suspense>
                    </ErrorBoundary>
                  }
                />
              )
            }
          </Route>
          <Route path='/user' element={<CustomerProtected compo={<UserLayout />} />}>
            {
              customerRoutes.map(item => item.isIndex
                ? <Route
                  index
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SuspenseFallback />} >{item.element}</Suspense>
                    </ErrorBoundary>
                  } />
                : <Route
                  path={item.path}
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SuspenseFallback />} >{item.element}</Suspense>
                    </ErrorBoundary>
                  } />
              )
            }
          </Route>
          {
            uniqueRoutes.map(item => item.isIndex
              ? <Route
                index
                element={<ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Suspense fallback={<SuspenseFallback />} >{item.element}</Suspense>
                </ErrorBoundary>} />
              : <Route
                path={item.path}
                element={<ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Suspense fallback={<SuspenseFallback />} >{item.element}</Suspense>
                </ErrorBoundary>} />
            )
          }
        </Routes>
      </BrowserRouter>
    </Suspense>
  </>

  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="details/:pid" element={<Details />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CustomerProtected compo={<Checkout />} />} />
          <Route path="success" element={<Success />} />
        </Route>
        <Route path='/admin' element={<AdminProtected compo={<AdminLayout />} />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
        </Route>

        <Route path='/user' element={<CustomerProtected compo={<UserLayout />} />}>
          <Route index element={<OrderHistory />} /> {/* http://localhost:5173/user */}
          <Route path="profile" element={<UserProfile />} /> {/* http://localhost:5173/user/profile */}
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