import React from 'react'
import { useFetchOrdersQuery } from '../../redux/customer/customerApi'

const OrderHistory = () => {
    const { data } = useFetchOrdersQuery()
    return (
        <div>OrderHistory</div>
    )
}

export default OrderHistory