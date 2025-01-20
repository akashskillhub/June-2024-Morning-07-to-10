import React from 'react'
// import { useLazyAdminGetOrderQuery, useLazyAdminGetResturantQuery } from '../../redux/apis/adminApi'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useLazyAdminGetOrderQuery } from '../../redux/apis/admin.api'

const Orders = () => {
    const [getOrder, { isLoading, isError, isSuccess, error, data }] = useLazyAdminGetOrderQuery()

    if (isLoading) {
        <div>Please wait.... <div class="spinner-border text-primary"></div></div>
    }



    useEffect(() => { getOrder() }, [])



    return <div className=' container'>
        <div className="table-responsive">

            {
                data && <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Customer Mobile</th>
                            <th>Resturant Name</th>
                            <th>Resturant Email</th>
                            <th>Resturant Mobile</th>
                            <th>Dish Name</th>
                            <th>Dish Price</th>
                            <th>Dish Type</th>
                            <th>Dish Qty</th>
                            <th>Order Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.result.map(order => (
                                order.items.map(item => <tr key={item._id}>
                                    <td>{order.customer.name}</td>
                                    <td>{order.customer.email}</td>
                                    <td>{order.customer.mobile}</td>
                                    <td>{order.resturant.name}</td>
                                    <td>{order.resturant.email}</td>
                                    <td>{order.resturant.mobile}</td>
                                    <td>{item.dish.name}</td>
                                    <td>{item.dish.price}</td>
                                    <td>{item.dish.type}</td>
                                    <td>{item.qty}</td>
                                    <td>{order.status}</td>
                                </tr>
                                )
                            )
                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    </div>
}

export default Orders