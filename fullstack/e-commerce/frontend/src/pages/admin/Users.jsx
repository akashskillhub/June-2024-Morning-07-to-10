import React, { useEffect, useState } from 'react'
import { useBlockUnBlockAdminUserMutation, useLazyGetAdminUsersQuery } from '../../redux/admin/adminApi'
import { Button, Container } from "react-bootstrap"
import { toast } from 'react-toastify'
const Users = () => {
    const [adminBlockUser, { isSuccess }] = useBlockUnBlockAdminUserMutation()
    const [pagi, setPagi] = useState({ skip: 0, limit: 2 })
    const [getUsers, { data }] = useLazyGetAdminUsersQuery()

    useEffect(() => {
        getUsers(pagi)
    }, [pagi])
    useEffect(() => {
        if (isSuccess) {
            toast.success("user block success")
        }
    }, [isSuccess])
    return <Container>
        <select onChange={e => setPagi({ skip: 0, limit: e.target.value })}>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select>

        {
            data && <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr
                            className={`${!item.isActive && "table-danger"}`}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>
                                {
                                    item.isActive
                                        ? <Button
                                            onClick={e => adminBlockUser({ ...item, isActive: false })}
                                            variant='danger'>
                                            Block
                                        </Button>
                                        : <Button
                                            onClick={e => adminBlockUser({ ...item, isActive: true })}
                                            variant='success'>
                                            Un Block
                                        </Button>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }

        {
            data && [...Array(Math.ceil(data.total / pagi.limit)).keys()].map(item => <Button className='me-1' onClick={e => setPagi({ ...pagi, skip: item * pagi.limit })}>
                {item}
            </Button>)
        }
    </Container>
}

export default Users