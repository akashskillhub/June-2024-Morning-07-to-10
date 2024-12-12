import clsx from "clsx"
import *as yup from "yup"
import { useFormik } from "formik"
import { Col, Container, FormControl } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { MdDeleteForever } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import OrderSummery from "../../components/public/OrderSummery";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePalceOrderMutation } from "../../redux/customer/customerApi";
import { emptyCart } from "../../redux/slices/cartSlice";


const Checkout = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.bag)
    const [placeOrder, { isSuccess }] = usePalceOrderMutation()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            address: "",
            city: "",
            payment: "",
        },
        validationSchema: yup.object({
            address: yup.string().required("Enter address"),
            city: yup.string().required("Enter city"),
            payment: yup.string().required("Choose payment"),
        }),
        onSubmit: (values, { resetForm }) => {
            placeOrder({ ...values, products: cart.map(item => item._id) })
            resetForm()
        }

    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    useEffect(() => {
        if (cart.length === 0) {
            navigate("/")
        }
    }, [])
    useEffect(() => {
        if (isSuccess) {
            dispatch(emptyCart())
            navigate("/success")
        }
    }, [isSuccess])
    return <Container>
        <form onSubmit={formik.handleSubmit}>
            <div className="d-flex justify-content-between gap-5 ">
                <Container className="bg-light ">
                    <div className="row py-4">
                        <div>
                            <FormControl {...formik.getFieldProps("address")} className={handleClasses("address")} placeholder="Enter Address" />
                            <FormControl {...formik.getFieldProps("city")} className={handleClasses("city")} placeholder="Enter City" />
                            <Form.Check
                                {...formik.getFieldProps("payment")}
                                type="radio"
                                name="payment"
                                id="cod"
                                value="cod"
                                label="COD" />
                            <Form.Check
                                {...formik.getFieldProps("payment")}
                                type="radio"
                                name="payment"
                                id="online"
                                value="online"
                                label="ONLINE" />
                        </div>
                    </div >
                </Container >
                <Container className='mx-0'>
                    <h5 className='mt-3'>Order Summary</h5>
                    <div class="card w-75">
                        <div class="card-header d-flex">
                            <div className='d-flex justify-content-between align-items-end container'>
                                <div>
                                    <img src="https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=" alt="" height={200} width={200} />
                                </div>
                                <div>
                                    <p>Basic Tee</p>
                                    <p>Black</p>
                                    <p className="mb-5">Large</p>
                                    <p className="mt-2">$32.00</p>
                                </div>
                                <div >
                                    <span><MdDeleteForever /></span>
                                    <Form.Select className='form-select-sm'>
                                        <option selected value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <OrderSummery showCheckout={false} />
                        </div>
                        <div class="card-footer">
                            <button type="submit" className='btn btn-primary'>Confirm Order</button>
                        </div>
                    </div>
                </Container>
            </div >
        </form>
    </Container>
}

export default Checkout