import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
            <div class="container">
                <Link class="navbar-brand" >Fullstack Blog</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link active" >Home</Link>
                        <Link to="/blogs" class="nav-link" >Blogs</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar