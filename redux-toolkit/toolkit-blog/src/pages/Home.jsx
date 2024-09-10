import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlog } from '../redux/blogActions'

const Home = () => {
    const { loading, error, blogs } = useSelector(state => state.allBlogs)
    const callAction = useDispatch()
    useEffect(() => { callAction(getBlog()) }, [])
    return <div className="container">
        <div className="row">
            {
                blogs && blogs.map(item => <div className="col-sm-4" key={item.id}>
                    <div class="card">
                        <img src={item.hero} className='img-fluid' alt="" />
                        <div class="card-body">{item.title}</div>
                    </div>
                </div>)
            }
        </div>
    </div>
}

export default Home