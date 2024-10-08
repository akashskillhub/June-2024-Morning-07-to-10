import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/public/PublicLayout'
import { publicRoutes } from './routes/publicRoute'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorHandler from './components/share/ErrorHandler'
import Loading from './components/share/Loading'
import AdminLayout from './components/admin/AdminLayout'
import { adminRoutes } from './routes/adminRoute'
import { customerRoutes } from './routes/customerRoute'
import CustomerNavbar from './components/customer/CustomerNavbar'
import CustomerLayout from './components/customer/CustomerLayout'


const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          {
            publicRoutes.map(item => <Route
              key={item.label}
              path={item.path}
              element={<ErrorBoundary FallbackComponent={<ErrorHandler />} >
                <Suspense fallback={<Loading />}>
                  {item.element}
                </Suspense>
              </ErrorBoundary>}
            />)
          }
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          {
            adminRoutes.map(item => <Route
              key={item.label}
              path={item.path}
              element={<ErrorBoundary FallbackComponent={<ErrorHandler />} >
                <Suspense fallback={<Loading />}>
                  {item.element}
                </Suspense>
              </ErrorBoundary>}
            />)
          }
        </Route>
        <Route path='/customer' element={<CustomerLayout />}>
          {
            customerRoutes.map(item => <Route
              key={item.label}
              path={item.path}
              element={<ErrorBoundary FallbackComponent={<ErrorHandler />} >
                <Suspense fallback={<Loading />}>
                  {item.element}
                </Suspense>
              </ErrorBoundary>}
            />)
          }
        </Route>


        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App