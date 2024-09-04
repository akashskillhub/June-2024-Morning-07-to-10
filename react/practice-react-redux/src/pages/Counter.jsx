import React from 'react'
import { useSelector } from 'react-redux'
import { dec, inc } from '../redux/actions/counterActions'
// import { dec, inc } from '../redux/store'

const Counter = () => {
    //                👇 getState()
    const { count } = useSelector(arg => arg.counter)
    console.log(count)
    return <>
        <button onClick={dec}>-1</button>
        <span>{count}</span>
        <button onClick={inc}>+1</button>
    </>

}

export default Counter