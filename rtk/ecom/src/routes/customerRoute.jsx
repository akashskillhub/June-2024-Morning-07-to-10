import { lazy } from "react"

const Account = lazy(() => import("./../pages/customer/Account"))
const Profile = lazy(() => import("./../pages/customer/Profile"))
export const customerRoutes = [
    { path: "", label: "account", element: <Account /> },
    { path: "profile", label: "profile", element: <Profile /> },
]