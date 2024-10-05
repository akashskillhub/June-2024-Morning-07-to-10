import React from 'react'
import Navbar from './pages/Navbar'
import Counter from './pages/Counter'
import Orders from './pages/Orders'
import { ErrorBoundary } from 'react-error-boundary'


const ErrorHandler = ({ error, resetErrorBoundary }) => {
  return <div>
    <p>{error.message}</p>
    <button onClick={resetErrorBoundary}>retry</button>
  </div>
}
const App = () => {
  return <>
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <Navbar />
    </ErrorBoundary>

    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <Counter />
    </ErrorBoundary>

    <Orders />
  </>
}

export default App