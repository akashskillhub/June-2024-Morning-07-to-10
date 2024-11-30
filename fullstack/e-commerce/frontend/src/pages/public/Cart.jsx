import React from 'react'
import { TiTick } from "react-icons/ti";
// import { Form } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { RxCross2 } from "react-icons/rx";
const Cart = () => {
    return <>

        <div class="container pt-4 ">
            <strong className='fs-3'>Shopping Cart</strong>
            <hr />
            <div className='d-flex justify-content-between  '>
                <div className='w-50'>

                    <div className='bg-light'>
                        <div className='d-flex   gap-4  p-1  mt-3'>
                            <div>
                                <img src="https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png" alt="" height={200} />
                            </div>

                            <div>

                                <p>basic tee</p>
                                <div>sienna | large </div>
                                <p className='pb-5'>$32.00</p>
                                <p  > <span className='text-success fs-4'> <TiTick /></span>   in stock</p>
                            </div>
                            <div>

                                <Form.Select className=" text-dark ">
                                    <option>1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4</option>
                                </Form.Select>
                            </div>
                            <span className='gap-5' ><RxCross2 /></span>

                        </div>
                    </div>
                    <hr />
                    <div className='bg-light'>
                        <div className='d-flex    gap-4  p-1  mt-3'>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/614g2CAxEVL._AC_SX466_.jpg" alt="" height={200} />
                            </div>

                            <div>

                                <p>basic tee</p>
                                <div>sienna | large </div>

                                <p className='pb-5'>$356.00</p>
                                <p  > <span className='text-success fs-4'> <TiTick /></span>   in stock</p>
                            </div>
                            <div>

                                <Form.Select className=" text-dark ">
                                    <option>1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4</option>
                                </Form.Select>
                            </div>
                            <span className='gap-5' ><RxCross2 /></span>
                        </div>
                    </div>
                    <hr />
                    <div className='bg-light'>
                        <div className='d-flex    gap-4  p-1  mt-3'>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/61BlypJrJRL._AC_SX569_.jpg" alt="" height={200} />
                            </div>

                            <div>

                                <p>basic tee</p>
                                <div>sienna | large </div>

                                <p className='pb-5'>$5.50</p>
                                <p  > <span className='text-success fs-4'> <TiTick /></span>   in stock</p>
                            </div>
                            <div>

                                <Form.Select className=" text-dark ">
                                    <option>1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4</option>
                                </Form.Select>
                            </div>
                            <span className='gap-5' ><RxCross2 /></span>
                        </div>
                    </div>
                    <hr />
                    <div className='bg-light'>
                        <div className='d-flex    gap-4  p-1  mt-3'>
                            <div>
                                <img src="https://i5.walmartimages.com/seo/Made-In-1977-Limited-Edition-Original-Parts-47-Year-Old-Gift-T-Shirt_fca81ca2-d840-4dd7-8832-94480e8e286b.c58e2c0b05fc2c6024bb7c2fa9f7f3f5.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="" height={200} />
                            </div>

                            <div>

                                <p>basic tee</p>
                                <div>sienna | large </div>

                                <p className='pb-5'>$5.40</p>
                                <p  > <span className='text-success fs-4'> <TiTick /></span>   in stock</p>
                            </div>


                            <div className=''>

                                <Form.Select className=" text-dark ">
                                    <option>1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4</option>
                                </Form.Select>
                            </div>

                            <span className='gap-5' ><RxCross2 /></span>

                        </div>
                    </div>

                </div>




                {/* ya se order sunnary hai */}
                <div className='w-25 bg-light p-3 h-25'>

                    <h5 >Order summary</h5>
                    <div className='d-flex justify-content-between'>
                        <p>Subtotal</p>
                        <p>$99.00</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <p>Shipping estimate</p>
                        <p>$5.00</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <p>Tax estimate</p>
                        <p>$8.60</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <strong>Order Total</strong>
                        <strong>$112.32</strong>
                    </div>
                    <button className='btn btn-primary m-2'>Checkout</button>
                </div>
            </div>
        </div>
    </>
}

export default Cart