import React, { useEffect } from 'react'
import { useInitiateOrderMutation, usePlaceOrderMutation } from '../redux/orderApi'

const Checkout = () => {
    const [initOrder, { data, isSuccess, isError }] = useInitiateOrderMutation()
    const [place, { isSuccess: placeSuccess, isError: placeIsError }] = usePlaceOrderMutation()

    useEffect(() => {
        if (isSuccess) {
            const razor = window.Razorpay({
                key: import.meta.env.VITE_RAZORPAY_API_KEY,
                amount: data.result.amount,
                currency: "INR",
                order_id: data.result.id,
                prefill: {
                    contact: "9284123374" //  👈 from auth 
                },
                handler: (arg) => {
                    place({ ...arg, name: "johnn", amount: data.result.amount })
                }
            })
            razor.open()
        }
    }, [isSuccess])
    return <>
        <button onClick={e => initOrder({ amount: 10 })}>pay now</button>
    </>
}

export default Checkout