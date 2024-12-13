import { Container, Table } from 'react-bootstrap'
import { useFetchOrdersQuery } from '../../redux/customer/customerApi'
import { format } from "date-fns"
const OrderHistory = () => {
    const { data } = useFetchOrdersQuery()
    return <Container>
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
                        data.result.map(item => <tr>
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
                            <td>{item.status}</td>
                            <td>{format(item.createdAt, "dd-MMM-yyyy")}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        }
    </Container>
}

export default OrderHistory