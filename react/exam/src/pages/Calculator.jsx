import { useState } from "react"

const Calculator = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState()
    const handleCalulation = op => {
        switch (op) {
            case "+": setResult(num1 + num2); break;
            case "-": setResult(num1 - num2); break;
            case "*": setResult(num1 * num2); break;
            case "/": setResult(num1 / num2); break;
            default: console.log("Invalid Operation"); break;
        }
    }
    const resetCalulation = () => {
        setNum1(0)
        setNum2(0)
        setResult(null)
    }
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <h1 className="my-5">This is your task: Duration 1 hour</h1>
                <div className="card">
                    <div className="card-header">Calculator</div>
                    <div className="card-body">
                        {
                            result && <div class="alert alert-primary">{result}</div>
                        }
                        <input value={num1} className="form-control my-2" type="number" onChange={e => setNum1(+e.target.value)} />
                        <input value={num2} className="form-control my-2" type="number" onChange={e => setNum2(+e.target.value)} />
                        <div className="btn-group w-100" >
                            <button className="btn btn-outline-primary" onClick={e => handleCalulation("+")}>+</button>
                            <button className="btn btn-outline-dark" onClick={e => handleCalulation("-")}>-</button>
                            <button className="btn btn-outline-warning" onClick={e => handleCalulation("*")}>*</button>
                            <button className="btn btn-outline-danger" onClick={e => handleCalulation("/")}>/</button>
                            <button className="btn btn-outline-secondary" onClick={resetCalulation}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Calculator