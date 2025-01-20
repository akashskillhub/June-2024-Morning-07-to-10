import React from 'react'
import { useLazyResturantGetOrdersQuery, useResturantChangeOrderStatusMutation } from '../../redux/apis/resturantApi'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const ResturantOrders = () => {
    const [changeStatus, { isSuccess: changeSuccess, isLoading: changeLoading }] = useResturantChangeOrderStatusMutation()
    const [getOrders, { data, isLoading }] = useLazyResturantGetOrdersQuery()

    useEffect(() => { getOrders() }, [])
    useEffect(() => {
        if (changeSuccess) {
            toast.success("status update")
        }
    }, [changeSuccess])
    return <>
        <div className="container">
            {
                data && <table class="table  table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>customer name</th>
                            <th>address</th>
                            <th>dish</th>
                            <th>status</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <tr key={item._id}>
                                <td>{item.customer.name}</td>
                                <td>{item.customer.address.substring(0, 15)} ...</td>
                                <td>
                                    {
                                        item.items.map(d => <div key={d._id}>
                                            {d.qty} x {d.dish.name}
                                        </div>)
                                    }
                                </td>
                                <td>{item.status}</td>
                                <td>
                                    <select onChange={e => changeStatus({
                                        status: e.target.value,
                                        _id: item._id
                                    })} className='form-control'>
                                        <option value="">change status</option>
                                        <option value="cooking">cooking</option>
                                        <option value="packing">packing</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
    </>
}

export default ResturantOrders