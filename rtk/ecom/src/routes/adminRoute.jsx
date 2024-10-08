import { lazy } from "react";
const Dashboard = lazy(() => import("./../pages/admin/Dashboard"))
const AdminCustomers = lazy(() => import("./../pages/admin/AdminCustomers"))
const AdminOrders = lazy(() => import("./../pages/admin/AdminOrders"))
const AdminProducts = lazy(() => import("./../pages/admin/AdminProducts"))

export const adminRoutes = [
    { path: "/", label: "dash", element: <Dashboard /> },
    { path: "/customer", label: "customer", element: <AdminCustomers /> },
    { path: "/orders", label: "orders", element: <AdminOrders /> },
    { path: "/products", label: "products", element: <AdminProducts /> },
] 