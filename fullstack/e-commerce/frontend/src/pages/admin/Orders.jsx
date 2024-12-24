import { Button, Container } from 'react-bootstrap'
import { useGetAdminOrdersQuery, useLazyGetAdminOrdersQuery, useUpdateAdminOrderMutation } from '../../redux/admin/adminApi'
import { Table } from 'react-bootstrap'
import { format } from "date-fns"
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
const Orders = () => {
    const [pagi, setPagi] = useState({ limit: 1, skip: 0 })
    const [getOrders, { data }] = useLazyGetAdminOrdersQuery()
    const [updateStatus, { isSuccess }] = useUpdateAdminOrderMutation()
    useEffect(() => {
        getOrders(pagi)
    }, [pagi])
    useEffect(() => {
        if (isSuccess) {
            toast.success("status update success")
        }
    }, [isSuccess])
    return <Container>
        <select class="form-select my-3" onChange={e => setPagi({ ...pagi, limit: e.target.value })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select>
        {
            data && <Table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>order id</th>
                        <th>address</th>
                        <th>city</th>
                        <th>payment</th>
                        <th>products</th>
                        <th>status</th>
                        <th>order on</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr
                            className={`
                                ${item.status === "delivered" && "table-success"}
                                ${item.status === "cancel" && "table-danger"}
                            `}>
                            <td>{item._id}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                            <td>{item.payment}</td>
                            <td>{item.products.map(p => <div className='d-flex gap-3'>
                                <img src={p.hero[0]} height={50} alt="" />
                                <div>
                                    <h6>{p.name}</h6>
                                    <h6>price: {p.price}</h6>
                                </div>
                            </div>)}</td>
                            <td>
                                <select onChange={e => updateStatus({ _id: item._id, status: e.target.value })}
                                    value={item.status}
                                    className='form-control'>
                                    <option value="palced">palced</option>
                                    <option value="delivered">delivered</option>
                                    <option value="cancel">cancel</option>
                                </select>

                            </td>
                            <td>{format(item.createdAt, "dd-MMM-yyyy")}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        }

        {data && [...Array(Math.ceil(data.total / pagi.limit)).keys()]
            .map(item => <Button className='me-1' onClick={e => setPagi({ ...pagi, skip: item * pagi.limit })}>
                {item + 1}
            </Button>)}
    </Container>
}

export default Orders