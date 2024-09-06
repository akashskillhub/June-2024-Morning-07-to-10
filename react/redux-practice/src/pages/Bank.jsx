import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { depositMoney, widrawAllMoney, widrawMoney } from '../redux/actions/accountActions'

const Bank = () => {
    const [amount, setAmount] = useState(0)
    const { balance } = useSelector(state => state.account)
    return <>
        <h1>balance = {balance}</h1>

        <input
            value={amount}
            onChange={e => setAmount(+e.target.value)}
            type="number"
            placeholder='Enter Amount' />
        <button onClick={e => depositMoney(amount)}>Deposit</button>
        <button onClick={e => widrawMoney(amount)}>Widraw</button>
        <button onClick={widrawAllMoney}>widraw all</button>
    </>
}

export default Bank