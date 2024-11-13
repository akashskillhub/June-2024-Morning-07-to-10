import React from 'react'
import Navbar from './pages/Navbar'
import Main from './pages/Main'
import Footer from './pages/Footer'
import { ErrorBoundary } from 'react-error-boundary'

const App = () => {
  return <>
    <ErrorBoundary FallbackComponent={e => <>Error</>}>
      <Navbar />
    </ErrorBoundary>
    <ErrorBoundary FallbackComponent={e => <>Error</>}>
      <Main />
    </ErrorBoundary>
    <ErrorBoundary FallbackComponent={e => <>Error</>}>
      <Footer />
    </ErrorBoundary>
  </>
}

export default App