import { useState } from "react"
import TodoForm from "../components/TodoForm"
import TodoTable from "../components/TodoTable"

const Home = () => {
    const [success, setSuccess] = useState(false)
    const toggle = () => { setSuccess(!success) }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Note App</div>
                        <div className="card-body">
                            <TodoForm toggleFn={toggle} success={success} />
                        </div>
                    </div>
                    <TodoTable success={success} toggleFn={toggle} />
                </div>
            </div>
        </div>
    </>
}





export default Home