import React, { useState } from 'react'

const Calculator = () => {
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [result, setResult] = useState()

    const cal = op => {
        switch (op) {
            case "add": setResult(num1 + num2); break;
            case "sub": setResult(num1 - num2); break;
            case "mul": setResult(num1 * num2); break;
            case "div": setResult(num1 / num2); break;
            default: break;
        }
    }
    return <div>
        <h1>{result}</h1>
        <input type="text" onChange={e => setNum1(+e.target.value)} />
        <input type="text" onChange={e => setNum2(+e.target.value)} />
        <hr />
        <button onClick={() => cal("add")}>+</button>
        <button onClick={() => cal("sub")}>-</button>
        <button onClick={() => cal("mul")}>*</button>
        <button onClick={() => cal("div")}>/</button>
    </div>
}

export default Calculator