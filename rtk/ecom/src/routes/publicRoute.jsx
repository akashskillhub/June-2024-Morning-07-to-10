import { lazy } from "react"
const Cart = lazy(() => import("./../pages/public/Cart"))
const Checkout = lazy(() => import("./../pages/public/Checkout"))
const Details = lazy(() => import("./../pages/public/Details"))
const Home = lazy(() => import("./../pages/public/Home"))
const Login = lazy(() => import("./../pages/public/Login"))
const Register = lazy(() => import("./../pages/public/Register"))
const Success = lazy(() => import("./../pages/public/Success"))
export const publicRoutes = [
    { showNavbar: true, path: "/", label: "home", element: <Home /> },
    { showNavbar: true, path: "/login", label: "login", element: <Login /> },
    { showNavbar: true, path: "/register", label: "register", element: <Register /> },
    { showNavbar: false, path: "/details", label: "details", element: <Details /> },
    { showNavbar: false, path: "/cart", label: "cart", element: <Cart /> },
    { showNavbar: false, path: "/checkout", label: "checkout", element: <Checkout /> },
    { showNavbar: false, path: "/success", label: "success", element: <Success /> },
]