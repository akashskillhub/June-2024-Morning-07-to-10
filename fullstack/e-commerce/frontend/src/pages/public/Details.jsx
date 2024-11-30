import React from 'react'
import { Container } from 'react-bootstrap'
import { IoStar, IoStarOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiOutlineInsurance } from "react-icons/ai";


const Details = () => {
    return <>
        <div className='d-flex justify-content-between '>
            <div className='p-5'>
                <p>Traval / Bag</p>
                <h3>Everyday Ruck Snack</h3>
                <div className='d-flex justify '>
                    <p className='me-3'>$220 | </p>
                    <p><IoStar /></p>
                    <p><IoStar /></p>
                    <p><IoStar /></p>
                    <p><IoStar /></p>
                    <p className='me-2'><IoStarOutline /></p>
                    <p>1640 reviews </p>

                </div>
                <p>Don't compromise on snack-carrying capacity with this <br />
                    lightweight and spacious bag. The drawstring top keeps <br />
                    all ypur favourite chips, crisps, fries,  biscuits, crackers, <br /> and cookies secure.</p>
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
                <button type="button" class="btn btn-primary w-100">Add to Bag</button>
                <div className='w-50 my-4 d-flex justify-content-center align-items-center'>
                    <p className=""><AiOutlineInsurance />Lifetime Gaurantee</p>
                </div>
            </div>
            {/* img */}

            <div>
                <div className="container p-5">
                    <img src="https://www.noplasticshop.in/wp-content/uploads/2020/11/Stylish-Signature-Rope-Handle.jpg" height={500} alt="" />
                </div>
            </div>
        </div >
    </>
}

export default Details