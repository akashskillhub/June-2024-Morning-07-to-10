import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Navbar = lazy(() => import("./components/Navbar"))

const ErrorFeedback = ({ error, resetErrorBoundary }) => {
  return <div>
    <p className="text-danger">{error && error.message}</p>
    <button onClick={resetErrorBoundary} type="button" class="btn btn-danger mt-3">Retry</button>
  </div>
}
const LoadingFeedback = () => {
  return <div>
    <p>Please Wait... <span className="spinner-border text-primary"></span> </p>
  </div>
}
const App = () => {
  const allRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]
  return <>
    <BrowserRouter>
      <Suspense fallback={<LoadingFeedback />}>
        <Navbar />
      </Suspense>
      <Routes>
        {
          allRoutes.map(item => <Route key={item.path} path={item.path} element={<>
            <ErrorBoundary FallbackComponent={<ErrorFeedback />}>
              <Suspense fallback={<LoadingFeedback />}>
                {item.element}
              </Suspense>
            </ErrorBoundary>
          </>}
          />)
        }
      </Routes>
    </BrowserRouter>
  </>
}

export default App