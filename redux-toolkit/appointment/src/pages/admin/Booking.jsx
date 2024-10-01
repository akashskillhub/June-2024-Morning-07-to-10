import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBookings } from '../../redux/actions/adminActions'

const Booking = () => {
    const [myBookings, setMyBookings] = useState()
    const dispatch = useDispatch()
    const { loading, error, allBookings } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(getAllBookings())
    }, [])
    useEffect(() => {
        setMyBookings(allBookings)
    }, [allBookings])
    return <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <div className="input-group my-3" >
                        <input
                            onChange={e => setMyBookings(allBookings.filter(item => item.date === e.target.value))}
                            type="date" className='form-control' />
                        <button onClick={e => setMyBookings(allBookings)} type="button" class="btn btn-primary">Show All</button>
                    </div>
                </div>
            </div>
            <table class="table table-dark table-striped table-hover ">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Date / Time</th>
                        <th>Desc</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myBookings && myBookings.map(item => <tr className={item.cancel && "table-danger"} key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.patientDetails.name}</td>
                            <td>{item.patientDetails.mobile}</td>
                            <td>{item.patientDetails.email}</td>
                            <td>{item.date} {item.time}</td>
                            <td>{item.desc}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default Booking