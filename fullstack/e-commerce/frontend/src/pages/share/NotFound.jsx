import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return <div className='vh-100 bg-light flex-column d-flex justify-content-center align-items-center'>
        <h1>404 Page Not Found</h1>
        <p>Help</p>
        <ul class="list-group w-50">
            <li class="list-group-item"> <Link className='text-decoration-none' to="#"> Privacy policy </Link></li>
            <li class="list-group-item"> <Link className='text-decoration-none' to="#"> Terms And Conditions </Link></li>
            <li class="list-group-item"> <Link className='text-decoration-none' to="#"> Return Policy </Link></li>
            <li class="list-group-item"> <Link className='text-decoration-none' to="#"> Refund Policy </Link></li>
        </ul>
        <Link to="/" className='mt-5 btn btn-outline-primary' >Back Home</Link>
    </div>
}

export default NotFound