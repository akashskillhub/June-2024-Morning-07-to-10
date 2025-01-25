import React, { useState } from 'react'
// import { useLazyAdminGetOrderQuery, useLazyAdminGetResturantQuery } from '../../redux/apis/adminApi'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAdminAssignRiderMutation, useAdminGetActiveRiderQuery, useAdminGetRiderQuery, useLazyAdminGetOrderQuery } from '../../redux/apis/admin.api'
import { socket } from '../../App'

const Orders = () => {
    const [assignRider, { isSuccess: assignSuccess }] = useAdminAssignRiderMutation()
    const { data: riderData } = useAdminGetActiveRiderQuery()
    const [pagi, setPagi] = useState({ limit: 2, skip: 0 })
    const [getOrder, { isLoading, isError, isSuccess, error, data }] = useLazyAdminGetOrderQuery()

    if (isLoading) {
        <div>Please wait.... <div class="spinner-border text-primary"></div></div>
    }
    socket.on("place-order", data => {
        getOrder(pagi)
    })
    socket.on("status-update", data => {
        getOrder(pagi)
    })
    useEffect(() => {
        if (assignSuccess) {
            toast.success("rider assign success")
        }
    }, [assignSuccess])
    useEffect(() => { getOrder(pagi) }, [pagi])
    return <div className=' container'>
        <div className="row">
            <div className="col-sm-4">
                <select
                    className="form-select my-3"
                    value={pagi.limit}
                    onChange={e => setPagi({ limit: e.target.value, skip: 0 })}>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div>
        <div className="table-responsive">
            {
                data && <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Mobile</th>
                            <th>Resturant Name</th>
                            <th>Resturant Mobile</th>
                            <th>Dish</th>
                            <th>Order Status</th>
                            <th>Rider</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.orders.map(item => <tr key={item._id}>
                                <td>{item.customer.name}</td>
                                <td>{item.customer.mobile}</td>
                                <td>{item.resturant.name}</td>
                                <td>{item.resturant.mobile}</td>
                                <td>
                                    {
                                        item.items.map(d => <div key={d._id}>
                                            <div className='d-block' >{d.qty} x {d.dish.name} x {d.dish.price}</div>
                                        </div>)
                                    }
                                </td>
                                <td>{item.status}</td>
                                <td>
                                    {
                                        item.rider
                                            ? <>
                                                <div> <strong>{item.rider.name}</strong> </div>
                                                <div> <strong>{item.rider.mobile}</strong> </div>
                                            </>
                                            : <select onChange={e => assignRider({ _id: item._id, rider: e.target.value })} className="form-select">
                                                <option selected>Choose Rider</option>
                                                {
                                                    riderData && riderData.result.map(item => <option key={item._id} value={item._id}>
                                                        {item.name}
                                                    </option>)
                                                }
                                            </select>
                                    }

                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            }
            {
                data && [...Array(Math.ceil(data.total / pagi.limit))].map((item, index) => <button
                    type="button"
                    onClick={e => setPagi({ ...pagi, skip: index * pagi.limit })}
                    className={`btn btn-sm me-1  ${index * pagi.limit === pagi.skip ? "btn-primary" : "btn-outline-primary"}`}>
                    {index}
                </button>)
            }
        </div>
    </div >
}

export default Orders