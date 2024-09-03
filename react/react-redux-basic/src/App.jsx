import React from 'react'
import { depositMoney, widrawMoney } from './redux/store'
import { useSelector } from 'react-redux'

const App = () => {
  // getState()
  //       👇 accountReducer                   👇 combineReducer
  const { balance } = useSelector(arg => arg.account)
  console.log(balance)

  return <>
    <div>{balance}</div>
    <button onClick={widrawMoney}>Widraw</button>
    <button onClick={depositMoney}>deposit</button>
  </>

}

export default App