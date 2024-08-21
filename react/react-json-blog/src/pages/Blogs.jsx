import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const [blogData, setBlogData] = useState({})
    const [editData, setEditData] = useState({})

    const [success, setSuccess] = useState(false)
    const handleChange = e => {
        const { name, value } = e.target
        setBlogData({ ...blogData, [name]: value })
    }
    // CRUD
    // create       post            => url  and body
    // read         get             => url
    // update       put/patch       => url+id and body
    // delete       delete          => url+id

    const BASE_URL = "http://localhost:5000/articles/"

    const createBlog = async e => {
        try {
            await axios.post(BASE_URL, blogData)
            console.log("blog create success")
            setSuccess(!success)
        } catch (error) {
            console.log(error)
        }
    }
    const readBlog = async e => {
        try {
            const { data } = await axios.get(BASE_URL)
            console.log("blog fetch success")
            setAllBlogs(data)
        } catch (error) {
            console.log(error)
        }
    }
    const updateBlog = async () => {
        try {
            await axios.patch(BASE_URL + editData.id, editData)
            console.log("blog update success")
            setSuccess(!success)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteBlog = async id => {
        try {
            await axios.delete(BASE_URL + id)
            console.log("blog delete success")
            setSuccess(!success)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        readBlog()
    }, [success])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Blog App</div>
                        <div className="card-body">
                            <input className='form-control my-2' onChange={handleChange} placeholder='Enter title' name='title' type="text" />
                            <input className='form-control my-2' onChange={handleChange} placeholder='Enter desc' name='desc' type="text" />
                            <input className='form-control my-2' onChange={handleChange} placeholder='Enter Hero Image URL' name='hero' type="text" />
                            <button className='btn btn-dark w-100 btn-lg my-2' onClick={createBlog}>add</button>
                        </div>
                    </div>
                    <table className='table table-bordered table-dark mt-5'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>title</th>
                                <th>desc</th>
                                <th>hero</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBlogs.map(item => <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <img src={item.hero} height={100} alt="" />
                                    </td>
                                    <td>
                                        <button data-bs-toggle="modal" data-bs-target="#edit" className='mx-2 btn btn-sm btn-warning' onClick={e => setEditData(item)}>edit</button>
                                        <button className='mx-2 btn btn-sm btn-danger' onClick={e => deleteBlog(item.id)}>delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



        <div class="modal fade" id="edit">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input
                            className='form-control my-2'
                            type="text"
                            value={editData.title}
                            onChange={e => setEditData({ ...editData, title: e.target.value })}
                            placeholder='Enter title' />
                        <input
                            className='form-control my-2'
                            type="text"
                            onChange={e => setEditData({ ...editData, desc: e.target.value })}
                            value={editData.desc}
                            placeholder='Enter title' />

                        <input
                            className='form-control my-2'
                            type="text"
                            onChange={e => setEditData({ ...editData, hero: e.target.value })}
                            value={editData.hero}
                            placeholder='Enter title' />

                        <button
                            data-bs-dismiss="modal"
                            className='btn btn-warning btn-lg w-100 my-2'
                            onClick={updateBlog}>update blog</button>
                    </div>

                </div>
            </div>
        </div>



    </>
}

export default Blogs