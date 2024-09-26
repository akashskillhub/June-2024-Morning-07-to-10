import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookingHistory } from '../../redux/actions/patientActions'

const History = () => {
    const dispatch = useDispatch()
    const { history } = useSelector(state => state.patient)
    useEffect(() => {
        dispatch(getBookingHistory())
    }, [])
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
                    history && history.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.desc}</td>
                        <td>
                            <button className='btn btn-danger'>Cancel Booking</button>
                        </td>
                    </tr>)
                }

            </tbody>
        </table>
    </>
}

export default History