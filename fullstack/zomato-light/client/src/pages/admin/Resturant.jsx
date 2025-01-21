import React from 'react'
import { useEffect } from 'react'
import { useLazyAdminGetResturantQuery } from '../../redux/apis/admin.api'

const Resturants = () => {
    const [getResturant, { isLoading, isError, isSuccess, error, data }] = useLazyAdminGetResturantQuery()

    if (isLoading) {
        <div>Please wait.... <div class="spinner-border text-primary"></div></div>
    }

    useEffect(() => { getResturant() }, [])


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
                            <th>address</th>
                            <th>city</th>
                            <th>type</th>
                            <th>infoComplete</th>
                            <th>isActive</th>
                            <th>certificate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.result.map(item => <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.type}</td>
                                <td>{item.infoComplete.toString()}</td>
                                <td>{item.isActive.toString()}</td>
                                <td>
                                    <img height={100} src={item.certificate} alt="" />
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
    </div>
}

export default Resturants