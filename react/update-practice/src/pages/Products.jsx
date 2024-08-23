import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
    const BASE_URL = "http://localhost:5000/products/"
    const [allProducts, setAllProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({ name: "", price: null })
    const readProducts = async () => {
        try {
            const { data } = await axios.get(BASE_URL)
            setAllProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    const updateProducts = async () => {
        try {
            await axios.patch(BASE_URL + selectedProduct.id, selectedProduct)
            console.log("update success")
            readProducts()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { readProducts() }, [])
    return <>
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allProducts.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td> <button onClick={e => setSelectedProduct(item)}>edit</button> </td>
                    </tr>)
                }
            </tbody>
        </table>

        <input
            onChange={e => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
            value={selectedProduct.name}
            type="text" />
        <input
            onChange={e => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
            value={selectedProduct.price}
            type="number" />
        <button onClick={updateProducts}>update</button>
    </>

}

export default Products

// react-router-dom
// axios

// form validation
// formik yup
