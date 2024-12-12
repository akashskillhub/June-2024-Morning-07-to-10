import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useFormik } from 'formik';
import { clsx } from 'clsx';
import * as yup from 'yup'
import { useCustomerRegisterMutation } from '../../redux/auth/authApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Register = () => {
    const [registerCustomer, { isSuccess }] = useCustomerRegisterMutation()
    const navigate = useNavigate()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            password: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().required("Enter email"),
            mobile: yup.string().required("Enter mobile"),
            password: yup.string().required("Enter mobile"),
        }),
        onSubmit: (values, { resetForm }) => {
            registerCustomer(values)
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        'form-control my-2': true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("register success")
            navigate("/login")
        }
    }, [isSuccess])
    return <>

        <Container >
            <Row >
                <Col sm={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Header>Register</Card.Header>
                        <Card.Body>
                            <form onSubmit={formik.handleSubmit}>

                                <input
                                    className={handleClasses('name')}
                                    {...formik.getFieldProps('name')}
                                    type="text"
                                    placeholder='Name' />
                                <span className='invalid-feedback'>{formik.errors.name}</span>
                                <input
                                    className={handleClasses('email')}
                                    {...formik.getFieldProps('email')}
                                    type="email"
                                    placeholder='Email' />
                                <span className='invalid-feedback'>{formik.errors.email}</span>
                                <input
                                    className={handleClasses('mobile')}
                                    {...formik.getFieldProps('mobile')}
                                    placeholder='Mobile no'></input>
                                <span className='invalid-feedback'>{formik.errors.mobile}</span>

                                <input
                                    className={handleClasses('password')}
                                    {...formik.getFieldProps('password')}
                                    type="password"
                                    placeholder='Password' />
                                <span className='invalid-feedback'>{formik.errors.password}</span>

                                <Button
                                    variant='primary' className='w-100'
                                    type='submit'>Register</Button>
                            </form>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>



    </>
}

export default Register