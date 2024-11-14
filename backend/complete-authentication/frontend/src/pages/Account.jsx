import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetUsersQuery } from '../redux/apis/adminApi'
import { useSingoutMutation } from '../redux/apis/authApi'
import { toast } from 'react-toastify'

const Account = () => {
    //     👇 from slice                        👇 from store  
    const { user } = useSelector(state => state.auth)

    const { data } = useGetUsersQuery()
    const [logout, { isSuccess, isError, error }] = useSingoutMutation()

    useEffect(() => {
        if (isSuccess) {
            toast.success("logout success")
        }
    }, [isSuccess])
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" href="#">Home</a>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        welcome {user && user.name}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><button class="dropdown-item" onClick={logout}>logout</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Account