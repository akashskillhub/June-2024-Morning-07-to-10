import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetPublicProductDetailsQuery } from '../../redux/apis/publicApi'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

const Details = () => {
    const { customer } = useSelector(state => state.auth)
    const { pid } = useParams()
    const { data } = useGetPublicProductDetailsQuery(pid)
    const dispatch = useDispatch()

    return <>
        <Link to="/" className='btn btn-sm btn-outline-dark my-3'>Back</Link>
        {
            data && <div className="row">
                <div className="col-sm-6">
                    <img src={data.hero} className='img-fluid' alt="" />
                </div>
                <div className="col-sm-6">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Name</span>
                            <strong>{data.name}</strong>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Price</span>
                            <strong>{data.price}</strong>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Desc</span>
                            <strong>{data.desc}</strong>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Category</span>
                            <strong>{data.category}</strong>
                        </li>
                    </ul>
                    {
                        customer
                            ? <button
                                onClick={e => dispatch(addToCart(data))}
                                className='btn btn-outline-primary mt-3'>Add To Cart</button>

                            : <Link to="/login" className='btn btn-dark my-3'> Please Login </Link>
                    }

                </div>

            </div>
        }
    </>
}

export default Details