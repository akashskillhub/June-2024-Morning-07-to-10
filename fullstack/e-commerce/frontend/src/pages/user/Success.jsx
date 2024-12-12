import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    useEffect(() => {
        const id = setInterval(() => {
            console.log("called interval")
            setCount(pre => {
                if (pre === 0) {
                    navigate("/")
                } else {
                    return pre - 1
                }
            })
        }, 1000)

        return () => clearInterval(id)

    }, [])
    return <div className='text-center'>
        <h1>Order Place Success</h1>
        <p>you will be redirected in {count}</p>
        <Button>Shop More</Button>
    </div>
}

export default Success