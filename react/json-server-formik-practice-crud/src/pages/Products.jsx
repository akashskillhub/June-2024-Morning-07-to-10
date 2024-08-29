import React, { useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductTable from '../components/ProductTable'

const Products = () => {
    const [success, setSuccess] = useState(false)
    return <>
        <ProductForm success={success} setSuccess={setSuccess} />
        <ProductTable success={success} setSuccess={setSuccess} />
    </>
}

export default Products