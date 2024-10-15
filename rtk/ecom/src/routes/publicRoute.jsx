import { lazy } from "react"
// import AdminLogin from "../pages/public/AdminLogin"
const Cart = lazy(() => import("./../pages/public/Cart"))
const Checkout = lazy(() => import("./../pages/public/Checkout"))
const Details = lazy(() => import("./../pages/public/Details"))
const Home = lazy(() => import("./../pages/public/Home"))
const Login = lazy(() => import("./../pages/public/Login"))
const Register = lazy(() => import("./../pages/public/Register"))
const Success = lazy(() => import("./../pages/public/Success"))
const AdminLogin = lazy(() => import("./../pages/public/AdminLogin"))
export const publicRoutes = [
    { showWhileLogin: true, showNavbar: true, path: "/", label: "home", element: <Home /> },
    { showWhileLogin: false, showNavbar: true, path: "/login", label: "login", element: <Login /> },
    { showWhileLogin: false, showNavbar: true, path: "/register", label: "register", element: <Register /> },
    { showWhileLogin: false, showNavbar: false, path: "/details/:pid", label: "details", element: <Details /> },
    { showWhileLogin: false, showNavbar: false, path: "/cart", label: "cart", element: <Cart /> },
    { showWhileLogin: false, showNavbar: false, path: "/checkout", label: "checkout", element: <Checkout /> },
    { showWhileLogin: false, showNavbar: false, path: "/success", label: "success", element: <Success /> },
    { showWhileLogin: false, showNavbar: false, path: "/admin-login", label: "admin", element: <AdminLogin /> },
]