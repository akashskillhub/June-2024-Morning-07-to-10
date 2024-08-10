import React, { useState } from 'react'

const Articles = () => {
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const [hero, setHero] = useState()

    const [blogs, setBlogs] = useState([])

    const handleSubmit = () => {
        setBlogs([...blogs, { title, desc, hero }])
    }
    const handelDelete = arg => {
        const result = blogs.filter(item => item.title !== arg)
        setBlogs(result)
    }

    return <>
        {/* .container>.row>.col-sm-6.offset-sm-3>.card>.card-header+.card-body */}
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Blogs</div>
                        <div className="card-body">
                            <input
                                className='form-control my-2'
                                type="text"
                                placeholder='Enter Title'
                                onChange={e => setTitle(e.target.value)}
                            />
                            <input
                                className='form-control my-2'
                                type="text"
                                placeholder='Enter Description'
                                onChange={e => setDesc(e.target.value)}
                            />
                            <input
                                className='form-control my-2'
                                type="text"
                                placeholder='Enter Image URL'
                                onChange={e => setHero(e.target.value)}
                            />
                            <button className='btn btn-dark w-100 my-2' onClick={handleSubmit}>add</button>

                        </div>
                    </div>

                    <table className='table table-bordered table-striped table-dark mt-5'>
                        <thead>
                            <tr className='table-primary'>
                                <th>Title</th>
                                <th>Desc</th>
                                <th>Hero</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map(item => <tr key={item.title}>
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                    <td> <img src={item.hero} alt="" height={50} /> </td>
                                    <td>
                                        <button onClick={e => handelDelete(item.title)}>delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

        <hr />

    </>

}

export default Articles