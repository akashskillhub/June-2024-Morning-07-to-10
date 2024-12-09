import React from 'react'
import { TiTick } from "react-icons/ti";
// import { Form } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { emptyCart, removeFromCart } from '../../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import OrderSummery from '../../components/public/OrderSummery';
const Cart = () => {
    const { cart } = useSelector(state => state.bag)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    return <>

        {
            cart.length === 0
                ? <div className='text-center'>
                    <h1>Cart is Empty</h1>
                    <Button
                        onClick={e => navigate("/")}
                        className='outline-primary'
                        size='sm'>Shop Now</Button>
                </div>
                : <>
                    <div class="container pt-4 ">
                        <div className='d-flex justify-content-between'>
                            <strong className='fs-3'>Shopping Cart</strong>
                            <Button
                                onClick={e => dispatch(emptyCart())}
                                variant='outline-danger'
                                className='btn-sm'>Empty Cart</Button>
                        </div>
                        <hr />


                        <div className='d-flex justify-content-between  '>
                            <div className='w-50'>

                                {
                                    cart.map(item => <div className='d-flex gap-2 my-4 align-items-start '>
                                        <img src={item.hero[0]} height={100} alt="" />
                                        <div>
                                            <h6>{item.name}</h6>
                                            <p>Price: {item.price}</p>
                                        </div>
                                        <Button
                                            onClick={e => dispatch(removeFromCart(item))}
                                            className='ms-auto' variant='outline-danger'><RxCross2 /></Button>
                                    </div>)
                                }

                            </div>

                            {/* ya se order sunnary hai */}
                            <div className='w-25'>
                                <OrderSummery />
                            </div>
                        </div>
                    </div>
                </>
        }

    </>
}

export default Cart