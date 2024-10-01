import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelBooking, getBookingHistory } from '../../redux/actions/patientActions'
import { add, format, isBefore, sub } from 'date-fns';

const History = () => {
    // console.log(format(new Date(), "yyyy-MM-dd"))
    // console.log(add(new Date(), { days: 5 }))
    console.log(isBefore(new Date("2024-09-28"), new Date()))

    const dispatch = useDispatch()
    const { history, bookingCancel } = useSelector(state => state.patient)
    useEffect(() => {
        dispatch(getBookingHistory())
    }, [bookingCancel])
    return <>
        <table class="table table-dark table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Desc</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    history && history.map(item => <tr className={item.cancel && "table-danger"} key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.desc}</td>
                        <td>
                            {
                                isBefore(new Date(item.date), sub(new Date(), { days: 1 })) || item.cancel
                                    ? <button disabled className='btn btn-secondary'> {item.cancel ? "Already Cancled" : "Already Booked"} </button>
                                    : <button onClick={e => dispatch(cancelBooking(item))} className='btn btn-danger'>Cancel Booking</button>
                            }
                        </td>
                    </tr>)
                }

            </tbody>
        </table>
    </>
}

export default History