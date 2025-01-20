import { lazy, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorFeedback from "./components/share/ErrorFeedback"
import LoadingFeedback from "./components/share/LoadingFeedback"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import AdminProtected from "./components/share/AdminProtected"
import ResturantProtected from "./components/share/ResturantProtected"

const Resturants = lazy(() => import("./pages/admin/Resturant"))
const Customers = lazy(() => import("./pages/admin/Customers"))
const Orders = lazy(() => import("./pages/admin/Orders"))

const Home = lazy(() => import("./pages/public/Home"))
const Dashboard = lazy(() => import("./pages/admin/Dashboard"))
const ResturantDashboard = lazy(() => import("./pages/restuarant/ResturantDashboard"))
const ResturantOrders = lazy(() => import("./pages/restuarant/ResturantOrders"))

const AdminLayout = lazy(() => import("./components/admin/AdminLayout"))
const ResturantLayout = lazy(() => import("./components/resturant/ResturantLayout"))
const PublicLayout = lazy(() => import("./components/public/PublicLayout"))

const Login = lazy(() => import("./pages/public/Login"))
const AdminLogin = lazy(() => import("./pages/public/AdminLogin"))
const RegisterResturant = lazy(() => import("./pages/public/RegisterResturant"))

const App = () => {
  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "login-resturant", element: <Login /> },
    { path: "register-resturant", element: <RegisterResturant /> },
    { path: "login-admin", element: <AdminLogin /> }
  ]
  const adminRoutes = [
    { isIndex: true, path: "/", element: <Dashboard /> },
    { isIndex: false, path: "resturants", element: <Resturants /> },
    { isIndex: false, path: "customers", element: <Customers /> },
    { isIndex: false, path: "orders", element: <Orders /> },
  ]
  const resturantRoutes = [
    { isIndex: true, path: "/", element: <ResturantDashboard /> },
    { isIndex: false, path: "orders", element: <ResturantOrders /> }
  ]

  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          {
            publicRoutes.map(item => <Route
              key={`public-${item.path}`}
              index={item.isIndex}
              path={item.isIndex ? "" : item.path}
              element={<ErrorBoundary FallbackComponent={ErrorFeedback}>
                <Suspense fallback={<LoadingFeedback />}>
                  {item.element}
                </Suspense>
              </ErrorBoundary>}
            />)
          }
        </Route>

        <Route path="/admin" element={<AdminProtected compo={<AdminLayout />} />}>
          {
            adminRoutes.map(item => <Route
              key={`admin-${item.path}`}
              index={item.isIndex}
              path={item.isIndex ? "" : item.path}
              element={<ErrorBoundary FallbackComponent={ErrorFeedback}>
                <Suspense fallback={<LoadingFeedback />}>
                  {item.element}
                </Suspense>
              </ErrorBoundary>}
            />)
          }
        </Route>

        <Route path="/resturant" element={<ResturantProtected compo={<ResturantLayout />} />}>
          {
            resturantRoutes.map(item => <Route
              key={`resturant-${item.path}`}
              index={item.isIndex}
              path={item.isIndex ? "" : item.path}
              element={<ErrorBoundary FallbackComponent={ErrorFeedback}>
                <Suspense fallback={<LoadingFeedback />}>
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