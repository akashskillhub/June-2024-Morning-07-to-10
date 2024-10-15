import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { usePlaceOrderMutation } from '../../redux/apis/customerApi'
import { toast } from 'react-toastify'

const Cart = () => {
    const [placeOrder, { isSuccess }] = usePlaceOrderMutation()
    const { cart } = useSelector(state => state.publicCart)
    useEffect(() => {
        if (isSuccess) {
            toast.success("Order Place Success")
        }
    }, [isSuccess])
    return <>
        <div className='d-flex justify-content-between align-items-center'>
            <Link to="/" className='btn btn-sm btn-outline-dark my-3'>Back</Link>
            <button data-bs-toggle="modal" data-bs-target="#op" type="button" class="btn btn-primary">Buy</button>
        </div>
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <span>Cart</span>
                <strong>Total : {cart.reduce((total, item) => total + item.price, 0)}</strong>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    {
                        cart.map(item => <li class="list-group-item d-flex justify-content-between align-items-center">
                            <img src={item.hero} height={50} alt="" />
                            <strong>{item.name}</strong>
                            <strong>{item.price}</strong>
                        </li>)
                    }
                </ul>
            </div>
        </div>

        {/* modal */}

        <div class="modal fade" id="op">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Choose Payment Option</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="name" id="name" checked />
                            <label class="form-check-label" for="name">
                                Cash On Delivery
                            </label>
                        </div>
                        <button
                            onClick={e => placeOrder({ cart })}
                            type="button" class="btn btn-primary my-3 w-100">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Cart