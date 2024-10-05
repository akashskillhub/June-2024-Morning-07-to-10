import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Conatct from './pages/Conatct'
import { ErrorBoundary } from 'react-error-boundary'
import Home from './pages/Home'
import ErrorHandler from './share/ErrorHandler'
import { allRoutes } from './share/routes'
import Navbar from './components/Navbar'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {
          allRoutes.map(item => <Route
            key={item.label}
            path={item.path}
            element={
              <ErrorBoundary FallbackComponent={ErrorHandler}>
                {item.element}
              </ErrorBoundary>
            }
          />)
        }
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App