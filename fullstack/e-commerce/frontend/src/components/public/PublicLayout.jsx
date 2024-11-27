import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import PublicNavbar from './Navbar'

const PublicLayout = () => {
    return <>
        <PublicNavbar />
        <Outlet />
        <Footer />
    </>
}

export default PublicLayout