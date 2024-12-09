import React, { useEffect, useState } from 'react'
import { IoStar, IoStarOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiOutlineInsurance } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useGetPublicProductDetailsQuery } from '../../redux/public/publicApi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
const Details = () => {
    const dispatch = useDispatch()
    const [selectedHero, setSelectedHero] = useState()
    const { pid } = useParams()
    const { data } = useGetPublicProductDetailsQuery(pid)
    const { cart } = useSelector(state => state.bag)

    useEffect(() => {
        if (data) {
            setSelectedHero(data.hero[0])
        }
    }, [data])
    return <>
        {
            data && <div className='d-flex justify-content-between '>
                <div className='p-5'>
                    <p>Traval / Bag  </p>
                    <h3>{data.name}</h3>
                    <div className='d-flex justify '>
                        <p className='me-3'>{data.price} | </p>
                        <p><IoStar /></p>
                        <p><IoStar /></p>
                        <p><IoStar /></p>
                        <p><IoStar /></p>
                        <p className='me-2'><IoStarOutline /></p>
                        <p>1640 reviews </p>

                    </div>
                    <p>{data.desc}</p>
                    <p><MdOutlineDone />In stock and ready to ship</p>

                    <h5>Size</h5>
                    <div className='d-flex'>
                        <div className='border rounded-2 me-4 p-2' >
                            <h5>18L</h5>
                            <p>Perfect for a reasonable amount <br /> of snack</p>
                        </div>
                        <div className='border rounded-2 p-2'>
                            <h5>20 L</h5>
                            <p>Enough room for a serious  amount of <br /> snacks</p>
                        </div>
                    </div>
                    <p className='mt-3'> What size should I buy ? <BsFillQuestionCircleFill /></p>
                    {
                        cart.find(item => item._id === data._id)
                            ? <p>Product already in cart</p>
                            : <button onClick={e => dispatch(addToCart(data))} type="button" class="btn btn-primary w-100">Add to Bag</button>
                    }

                    <div className='w-50 my-4 d-flex justify-content-center align-items-center'>
                        <p className=""><AiOutlineInsurance />Lifetime Gaurantee</p>
                    </div>
                </div>

                <div>
                    <div className="container p-5">
                        <img src={selectedHero} height={500} alt="" />
                    </div>

                    <div className="container p-5 d-flex gap-3 ">
                        {
                            data.hero.map(item => <img
                                onClick={e => setSelectedHero(item)}
                                key={item}
                                src={item}
                                height={100}
                                alt="" />)
                        }

                    </div>

                </div>
            </div >
        }
    </>
}

export default Details