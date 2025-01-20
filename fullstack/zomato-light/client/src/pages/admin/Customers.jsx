import React from 'react'
// import { useLazyAdminGetCustomerQuery } from '../../redux/apis/adminApi'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useLazyAdminGetCustomerQuery } from '../../redux/apis/admin.api'

const Customers = () => {
    const [getCustomer, { isLoading, isError, isSuccess, error, data }] = useLazyAdminGetCustomerQuery()

    if (isLoading) {
        <div>Please wait.... <div class="spinner-border text-primary"></div></div>
    }

    useEffect(() => { getCustomer() }, [])


    return <div className=' container mt-5'>
        <div className="table-responsive">

            {
                data && <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>mobile</th>
                            <th>gender</th>
                            <th>address</th>
                            <th>city</th>
                            <th>infoComplete</th>
                            <th>isActive</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.result.map(item => <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.gender}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.infoComplete.toString()}</td>
                                <td>{item.isActive.toString()}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
    </div>
}

export default Customers