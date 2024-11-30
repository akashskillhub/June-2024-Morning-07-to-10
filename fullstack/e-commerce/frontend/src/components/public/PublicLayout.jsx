import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import PublicNavbar from './Navbar'

const PublicLayout = () => {
    return <>
        <PublicNavbar />
        <div className='my-5'>
            <Outlet />
        </div>
        <Footer />
    </>
}

export default PublicLayout