import { useFormik } from 'formik'
import { Card, CardBody, CardHeader, Col, Container, Row, Spinner } from 'react-bootstrap'
import * as yup from 'yup'
import clsx from 'clsx'
import { useAdminLoginMutation } from '../../redux/auth/authApi'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate()
    const [adminSignin, { isSuccess, isError, isLoading, error }] = useAdminLoginMutation()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required("Enter email"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            adminSignin(values)
            resetForm()
        }
    })

    const handleClass = key => clsx({
        'form-control my-2': true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("admin login success")
            navigate("/admin")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(error.data.message || "something went wrong")
        }
    }, [isError])
    if (isLoading) {
        return <>
            Please Wait...  <Spinner></Spinner>
        </>
    }
    return <>
        <Container>
            <Row>
                <Col sm={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Header>Admin Login</Card.Header>
                        <Card.Body>
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input type="email" {...formik.getFieldProps("email")} className={handleClass("email")} />
                                    <span className='invalid-feedback'>{formik.errors.email}</span>
                                </div>
                                <div>
                                    <input type="password" {...formik.getFieldProps("password")} className={handleClass("password")} />
                                    <span className='invalid-feedback'>{formik.errors.password}</span>
                                </div>
                                <button className='btn btn-dark' type="submit">Login</button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}

export default AdminLogin