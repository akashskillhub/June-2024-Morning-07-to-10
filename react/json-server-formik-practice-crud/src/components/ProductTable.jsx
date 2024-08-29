import React, { useEffect, useState } from 'react'
import api from '../utile/api'
import ProductForm from './ProductForm'

const ProductTable = ({ success, setSuccess }) => {
    const [selectedProduct, setSelectedProduct] = useState()
    const [allProducts, setAllProducts] = useState([])

    const getAllProducts = async () => {
        try {
            const { data } = await api.get("/products")
            setAllProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async id => {
        try {
            await api.delete("/products/" + id)
            console.log("Product Delete Success")
            setSuccess(!success)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getAllProducts() }, [success])
    return <>
        <table className='table table-bordered table-hover table-striped table-dark mt-5'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>desc</th>
                    <th>category</th>
                    <th>Available</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allProducts.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.desc}</td>
                        <td>{item.category}</td>
                        <td>{item.isAvailable}</td>
                        <td>
                            <button
                                onClick={e => setSelectedProduct(item)}
                                data-bs-toggle="modal"
                                data-bs-target="#edit">edit</button>
                            <button onClick={e => deleteProduct(item.id)}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>

        </table>


        <div class="modal fade" id="edit" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ProductForm
                            selectedProduct={selectedProduct}
                            success={success}
                            setSuccess={setSuccess}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProductTable