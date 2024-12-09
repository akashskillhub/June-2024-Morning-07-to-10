import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const OrderSummery = ({ showCheckout = true }) => {
    const { cart } = useSelector(state => state.bag)
    const navigate = useNavigate()
    const handleOrderTotal = () => {
        const subTotal = cart.reduce((sum, item) => sum + item.price, 0)
        const tax = 18 * subTotal / 100
        const shipping = 100
        const total = subTotal + tax + shipping
        return { subTotal, tax, shipping, total }
    }
    return <>
        <div className=' bg-light p-3 h-25'>

            <h5 >Order summary</h5>
            <div className='d-flex justify-content-between'>
                <p>Subtotal</p>
                <p>
                    {
                        handleOrderTotal().subTotal
                    }
                </p>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
                <p>Shipping estimate</p>
                <p>{handleOrderTotal().shipping}</p>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
                <p>Tax estimate</p>
                <p>{handleOrderTotal().tax}</p>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
                <strong>Order Total</strong>
                <strong>{handleOrderTotal().total}</strong>
            </div>

            {
                showCheckout && <button
                    onClick={e => navigate("/checkout")}
                    className='btn btn-primary m-2'>
                    Checkout
                </button>
            }

        </div>
    </>
}

export default OrderSummery