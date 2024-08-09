import React from 'react'

const Practiceprops = () => {
    const cart = [
        { name: "keyboard", price: 800, qty: 2 },
        { name: "mouse", price: 1200, qty: 1 },
        { name: "webcam", price: 1800, qty: 3 },
    ]
    return <div>
        <div>Practiceprops</div>
        <Products x={cart}></Products>
    </div>
}

// const Products = (props) => {
// const { x } = props
const Products = ({ x }) => {
    return <div>
        <h6>Products</h6>
        <hr />
        {/* print table */}
        <table border={1}>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>qty</th>
                </tr>
            </thead>
            <tbody>
                {
                    x.map(item => <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

// useState
// event => onChange , onClick, preventDefault

export default Practiceprops