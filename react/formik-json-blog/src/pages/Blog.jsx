import React, { useState } from 'react'
import BlogForm from '../components/BlogForm'
import BlogTable from '../components/BlogTable'

const Blog = () => {
    const [success, setSuccess] = useState(false)

    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Blog</div>
                        <div className="card-body">
                            <BlogForm success={success} setSuccess={setSuccess} />
                        </div>
                    </div>
                    <BlogTable success={success} setSuccess={setSuccess} />
                </div>
            </div>
        </div>
    </>
}

export default Blog