import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../../utils/handleClasses'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bookAppointment } from '../../redux/actions/patientActions'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Account = () => {
    const { loading, error, history, bookSucces } = useSelector(state => state.patient)
    const { patient } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // dateFns
    const x = new Date()
    let day = x.getDate()
    day = day < 10 ? `0${day}` : day

    let month = x.getMonth() + 1
    month = month < 10 ? `0${month}` : month

    const year = x.getFullYear()

    const getToday = () => {
        let t = new Date()
        t.setHours(0, 0, 0, 0)
        return t
    }
    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            desc: "",
        },
        validationSchema: yup.object({
            date: yup.date()
                .min(getToday(), "You Can not select date befor today")
                .max(new Date(`${year}-${month}-${+day + 2}`), "Date not allowed")
                .required("Enter date"),
            time: yup
                .string()
                .test("test-time", "invalid time", value => value >= "10:00" && value <= "20:00"),
            desc: yup.string().required("Enter desc"),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(bookAppointment({
                ...values,
                patient: patient.id,
                patientDetails: patient
            }))
            resetForm()
        }
    })

    useEffect(() => {
        if (bookSucces) {
            toast.success("Booking Success")
        }
    }, [bookSucces])

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    if (loading) {
        return <div>
            please wait ...
            <div class="spinner-border text-primary"></div>
        </div>
    }

    return <div className="container mt-5">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">Book Appointment</div>
                    <div class="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input
                                    className={handleClasses("date", formik)}
                                    // onChange={e => console.log(new Date(e.target.value))}
                                    {...formik.getFieldProps("date")}
                                    type="date"
                                    min={`${year}-${month}-${day}`}
                                    max={`${year}-${month}-${+day + 2}`}
                                />
                                <span className="invalid-feedback">{formik.errors.date}</span>
                            </div>
                            <div>
                                <input className={handleClasses("time", formik)} {...formik.getFieldProps("time")} type="time" min="10:00" max="20:00" />
                                <span className="invalid-feedback">{formik.errors.time}</span>
                            </div>
                            <div>
                                <textarea className={handleClasses("desc", formik)} {...formik.getFieldProps("desc")}></textarea>
                                <span className="invalid-feedback">{formik.errors.desc}</span>
                            </div>
                            <button className='btn btn-dark' type='submit'>Book Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


}


export default Account