import React, { useEffect, useState } from 'react'
import api from '../util/api'
import BlogForm from './BlogForm'


const BlogTable = ({ success, setSuccess }) => {
    const [selectedBlog, setSelectedBlog] = useState()

    const [allBlogs, setAllBlogs] = useState([])
    const readBlogs = async e => {
        try {
            const { data } = await api.get("/articles")
            setAllBlogs(data)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteBlog = async id => {
        try {
            await api.delete("/articles/" + id)
            console.log("delete success")
            setSuccess(!success)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { readBlogs() }, [success])
    return <>
        <table className='table table-bordered table-dark table-hover'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>hero</th>
                    <th>desc</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>

                {
                    allBlogs.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                            <img src={item.hero} height={100} alt="" />
                        </td>
                        <td>{item.desc}</td>
                        <td>
                            <button
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                onClick={e => setSelectedBlog(item)}
                                className='mx-2 btn btn-sm btn-outline-warning'>Edit</button>
                            <button
                                onClick={e => deleteBlog(item.id)}
                                className='mx-2 btn btn-sm btn-outline-danger'>Delete</button>
                        </td>

                    </tr>)
                }
            </tbody>
        </table>


        <div class="modal fade" id="edit">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <BlogForm
                            selectedBlog={selectedBlog}
                            success={success}
                            setSuccess={setSuccess} />
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default BlogTable