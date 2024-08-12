import { useState } from "react"

const Expense = () => {
    const [data, setData] = useState({})
    const [account, setAccount] = useState([])
    const [balance, setBalance] = useState(0)

    const handleChange = e => {
        const { value, name, type } = e.target
        if (type === "number") {
            setData({ ...data, [name]: +value })
        } else {
            setData({ ...data, [name]: value })
        }
    }

    const handleSubmit = () => {

        // Event Loop  => async code
        // react-router-dom

        const x = [...account, data]
        let creditAmount = 0, debitAmount = 0
        for (const item of x) {
            if (item.type === "credit") {
                creditAmount += item.amount
            } else {
                debitAmount += item.amount
            }
        }
        setAccount(x)
        setBalance(creditAmount - debitAmount)
    }

    const handleDelete = arg => {
        const x = account.filter(item => item.cause !== arg)
        setAccount(x)
    }


    return <>

        {/* .container>.row>.col-sm-6>.card>.card-header+.card-body */}

        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-header">Expense Tracker</div>
                        <div className="card-body">
                            <input
                                className="form-control my-2"
                                name="cause"
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter Cause" />
                            <input
                                className="form-control my-2"
                                name="amount"
                                onChange={handleChange}
                                type="number"
                                placeholder="Enter Amount" />
                            <select
                                className="form-control my-2"
                                name="type"
                                onChange={handleChange}>
                                <option value="" disabled selected>Choose Type</option>
                                <option value="credit">credit</option>
                                <option value="debit">debit</option>
                            </select>
                            <button className="btn btn-dark w-100 my-2" onClick={handleSubmit}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <strong>Balance</strong>
                            <span>{balance}</span>
                        </div>
                        <div className="card-body">
                            {
                                account.map(item => <div
                                    className={`d-flex justify-content-between alert ${item.type === "credit" ? "alert-success" : "alert-danger"}`}
                                    key={item.cause}>
                                    <strong>{item.cause}</strong>
                                    <span>{item.amount}</span>
                                    <button
                                        onClick={() => handleDelete(item.cause)}
                                        type="button"
                                        class="btn btn-outline-danger btn-sm">Delete</button>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* <pre> {JSON.stringify(data)} </pre> */}
        {/* <pre> {JSON.stringify(account)} </pre> */}


    </>
}

export default Expense