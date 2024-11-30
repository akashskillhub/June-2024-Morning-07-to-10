import clsx from "clsx"
import *as yup from "yup"
import { useFormik } from "formik"
import { Col, Container } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { MdDeleteForever } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";


const Checkout = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            frist_name: "",
            last_name: "",
            company: "",
            address: "",
            app: "",
            city: "",
            country: "",
            state: "",
            postel_code: "",
            phone: "",
            payment: "",
            cardno: "",
            cardname: "",
            date: "",
            cvc: "",

        },
        validationSchema: yup.object({
            email: yup.string().required("Enter  email"),
            frist_name: yup.string().required("Enter  frist_name"),
            last_name: yup.string().required("Enter  last_name"),
            company: yup.string().required("Enter  company"),
            address: yup.string().required("Enter  address"),
            app: yup.string().required("Enter  app"),
            city: yup.string().required("Enter  city"),
            country: yup.string().required("Enter  country"),
            state: yup.string().required("Enter  state"),
            postel_code: yup.string().required("Enter  postel_code"),
            phone: yup.string().required("Enter  phone"),
            payment: yup.string().required("Enter  payment"),
            cardno: yup.string().required("Enter  cardno"),
            cardname: yup.string().required("Enter  cardname"),
            date: yup.string().required("Enter  date"),
            cvc: yup.string().required("Enter  cvc"),

        }),
        onSubmit: (values, { resetForm }) => {
            resetForm()
        }

    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    return <Container>
        <div className="d-flex justify-content-between gap-5 ">
            <Container className="bg-light">

                <div className="row">

                    <form onSubmit={formik.handleSubmit}>

                        <h5>Contact information</h5>
                        <div class="mt-2">
                            <label for="email" class="form-label">first email</label>
                            <input
                                type="email"
                                {...formik.getFieldProps("email")}
                                className={handleClasses("email")}
                                id="email"

                            />
                            <span class="invalid-feedback">{formik.errors.email}</span>
                        </div>

                        <h5>Shipping information</h5>
                        <div class="mt-2  d-flex gap-2 ">
                            <Col sm={6}>
                                <div>
                                    <label for="frist_name" class="form- mb-0">First name</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("frist_name")}
                                        className={handleClasses("frist_name")}
                                        id="frist_name"

                                    />
                                    <span className="invalid-feedback">{formik.errors.frist_name}</span>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div>
                                    <label for="last_name" class="form-label mb-0">Last_name</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("last_name")}
                                        className={handleClasses("last_name")}
                                        id="last_name"

                                    />
                                    <span className="invalid-feedback">{formik.errors.last_name}</span>
                                </div>
                            </Col>
                        </div>
                        <div class="mt-2 mb-3">
                            <label for="company" class="form-label mb-0">Company</label>
                            <input
                                type="text"
                                {...formik.getFieldProps("company")}
                                className={handleClasses("company")}
                                id="company"

                            />
                            <span class="invalid-feedback">{formik.errors.company}</span>
                        </div>
                        <div class="mt-2 mb-3">
                            <label for="address" class="form-label mb-0">Address</label>
                            <input
                                type="text"
                                {...formik.getFieldProps("address")}
                                className={handleClasses("address")}
                                id="address"

                            />
                            <span class="invalid-feedback">{formik.errors.address}</span>
                        </div>
                        <div class="mt-2 mb-3">
                            <label for="app" class="form-label mb-0">Appertment,suite,etc.</label>
                            <input
                                type="text"
                                {...formik.getFieldProps("app")}
                                className={handleClasses("app")}
                                id="app"

                            />
                            <span class="invalid-feedback">{formik.errors.app}</span>
                        </div>
                        <div class="mt-2 d-flex gap-2  ">
                            <Col sm={6}>
                                <div>
                                    <label for="city" class="form-label mb-0">City</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("city")}
                                        className={handleClasses("city")}
                                        id="city"

                                    />
                                    <span className="invalid-feedback">{formik.errors.city}</span>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <p className="mb-0 mt-2">Country</p>
                                <Form.Select className='form-select-sm'>
                                    <option selected value="1">India</option>
                                    <option value="2">Dubai</option>
                                    <option value="3">United State</option>
                                </Form.Select>

                                <span className="invalid-feedback">{formik.errors.country}</span>

                            </Col>
                        </div>
                        <div class="mt-2  d-flex gap-2 ">
                            <Col sm={6}>
                                <div>
                                    <label for="state" class="form-label mb-0">state / Provice</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("state")}
                                        className={handleClasses("state")}
                                        id="state"

                                    />
                                    <span className="invalid-feedback">{formik.errors.state}</span>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div>
                                    <label for="postel_code" class="form-label mb-0">Postel code</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("postel_code")}
                                        className={handleClasses("postel_code")}
                                        id="postel_code"

                                    />
                                    <span className="invalid-feedback">{formik.errors.postel_code}</span>
                                </div>
                            </Col>
                        </div>
                        <div>
                            <label for="phone" class="form-label mb-0">Phone</label>
                            <input
                                type="number"
                                {...formik.getFieldProps("phone")}
                                className={handleClasses("phone")}
                                id="phone"

                            />
                            <span className="invalid-feedback">{formik.errors.phone}</span>
                        </div>
                        <hr />
                        <h5 >Delivery method</h5>
                        <div className="d-flex gap-2">
                            <Col sm={6}>
                                <button className="btn btn-outline-dark text-dark w-100">
                                    <h6>standard</h6>
                                    <p>4-10 business days</p>
                                    <p>$5.00</p>
                                </button>
                            </Col>
                            <Col sm={6}>
                                <button className="btn btn-outline-primary text-dark w-100">
                                    <h6>Express</h6>
                                    <p>2-5 business days</p>
                                    <p>$16.00</p>
                                </button>
                            </Col>
                        </div>
                        <hr />
                        <h5>Payment</h5>
                        <div className="  mt-5">
                            <Form className="d-flex gap-2">
                                {['radio'].map((type) => (
                                    <div key={`defalut-${type}`} className="mb-3">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={`Credit Card${type} `}
                                        />
                                    </div>
                                ))}
                                {['radio'].map((type) => (
                                    <div key={`defalut-${type}`} className="mb-3">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={`Paypal${type} `}
                                        />
                                    </div>
                                ))}
                                {['radio'].map((type) => (
                                    <div key={`defalut-${type}`} className="mb-3">
                                        <Form.Check
                                            type={type}
                                            label={` eTransfer${type} `}
                                        />
                                    </div>
                                ))}
                            </Form >
                            <div>
                                <label for="cardno" class="form-labe mb-0l">Card number</label>
                                <input
                                    type="number"
                                    {...formik.getFieldProps("cardno")}
                                    className={handleClasses("cardno")}
                                    id="cardno"

                                />
                                <span className="invalid-feedback">{formik.errors.cardno}</span>
                            </div>
                            <div>
                                <label for="cardname" class="form-label mb-0">Name on card </label>
                                <input
                                    type="text"
                                    {...formik.getFieldProps("cardname")}
                                    className={handleClasses("cardname")}
                                    id="cardname"

                                />
                                <span className="invalid-feedback">{formik.errors.cardname}</span>
                            </div>
                            <div className="d-flex gap-3">
                                <Col sm={8}>
                                    <div>
                                        <label for="date" class="form-label">Expiration date(MM/YY)</label>
                                        <input
                                            type="date"
                                            {...formik.getFieldProps("date")}
                                            className={handleClasses("date")}
                                            id="date"

                                        />
                                        <span className="invalid-feedback">{formik.errors.date}</span>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div>
                                        <div>
                                            <label for="cvc" class="form-label">CVC</label>
                                            <input
                                                type="number"
                                                {...formik.getFieldProps("cvc")}
                                                className={handleClasses("cvc")}
                                                id="cvc"

                                            />
                                            <span className="invalid-feedback">{formik.errors.cvc}</span>
                                        </div>
                                    </div>
                                </Col>
                            </div>

                        </div >

                    </form >
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
                        <div className='d-flex justify-content-between'>
                            <p>Subtotal</p>
                            <p>$64.00</p>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <p>Shipping estimate <span className='text-secondary'><BsFillQuestionCircleFill /></span></p>
                            <p>$5.00</p>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <p>Taxes <span className='text-secondary'><BsFillQuestionCircleFill /></span></p>
                            <p>$5.52</p>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h6>Total</h6>
                            <p>$75.52</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button className='btn btn-primary'>Confirm Order</button>
                    </div>
                </div>
            </Container>
        </div >
    </Container>
}

export default Checkout