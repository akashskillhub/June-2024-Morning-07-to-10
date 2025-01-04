import { Link } from 'react-router-dom'
const Footer = () => {
    return <>
        <div className="bg-light py-5">
            <div className="container">
                <h1 className='text-danger'>Zomato Lite</h1>
                <div className="row">
                    <div className="col-sm-3 offset-sm-6">
                        <Link className='nav-link' to="/login-admin">Admin</Link>
                        <Link className='nav-link' to="/resturant">Resturant</Link>
                    </div>
                    <div className="col-sm-3">
                        <Link className='nav-link' to="/admin">Download Rider App</Link>
                        <Link className='nav-link' to="/admin">Download Zomato App</Link>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Footer