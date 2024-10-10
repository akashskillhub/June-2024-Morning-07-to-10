import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../../utils/handleClasses'
import { useAddProductMutation, useDeleteProductMutation, useGetAllProductsQuery, useUpdateProductMutation } from '../../redux/apis/adminApi'
import { toast } from 'react-toastify'
const AdminProducts = () => {
    const { data } = useGetAllProductsQuery()
    const [addProduct, { isSuccess: addProductSuccess, isError: isErroraddProduct }] = useAddProductMutation()
    const [udpateProduct, { isSuccess: udpateProductSuccess, isError: isErrorudpateProduct }] = useUpdateProductMutation()
    const [deleteProduct, { isSuccess: deleteProductSuccess, isError: isErrordeleteProduct }] = useDeleteProductMutation()

    const [selectedProduct, setSelectedProduct] = useState()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedProduct ? selectedProduct.name : "",
            price: selectedProduct ? selectedProduct.price : "",
            stock: selectedProduct ? selectedProduct.stock : "",
            hero: selectedProduct ? selectedProduct.hero : "",
            desc: selectedProduct ? selectedProduct.desc : "",
            category: selectedProduct ? selectedProduct.category : "",
            isAvailable: selectedProduct ? selectedProduct.isAvailable : true,
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter name"),
            price: yup.string().required("Enter price"),
            stock: yup.string().required("Enter stock"),
            hero: yup.string().required("Enter hero"),
            desc: yup.string().required("Enter desc"),
            category: yup.string().required("Enter category"),
            isAvailable: yup.string().required("Enter isAvailable"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedProduct) {
                udpateProduct({ ...selectedProduct, ...values })
                setSelectedProduct(null)
            } else {
                addProduct(values)
            }
            resetForm()
        }
    })
    useEffect(() => {
        if (addProductSuccess) {
            toast.success("addProduct Success")
        }
    }, [addProductSuccess])
    useEffect(() => {
        if (udpateProductSuccess) {
            toast.success("udpateProduct Success")
        }
    }, [udpateProductSuccess])
    useEffect(() => {
        if (deleteProductSuccess) {
            toast.success("deleteProduct Success")
        }
    }, [deleteProductSuccess])


    useEffect(() => {
        if (isErroraddProduct) {
            toast.error("unable to addProduct")
        }
    }, [isErroraddProduct])
    useEffect(() => {
        if (isErrorudpateProduct) {
            toast.error("unable to udpateProduct")
        }
    }, [isErrorudpateProduct])
    useEffect(() => {
        if (isErrordeleteProduct) {
            toast.error("unable to deleteProduct")
        }
    }, [isErrordeleteProduct])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between ">
                            <span> Manage Product</span>
                            <div class="form-check form-switch">
                                <input checked={formik.values.isAvailable}  {...formik.getFieldProps("isAvailable")} class="form-check-input" type="checkbox" id="isAvailable" />
                                <label class="form-check-label" for="isAvailable">Is Available</label>
                            </div>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mt-2">
                                            <label for="name" className="form-label">Enter Product Name</label>
                                            <input
                                                type="text"
                                                {...formik.getFieldProps("name")}
                                                className={handleClasses("name", formik)}
                                                id="name"
                                                placeholder="Enter Your namez"
                                            />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">{formik.errors.name}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mt-2">
                                            <label for="price" className="form-label">Enter Product Price</label>
                                            <input
                                                type="number"
                                                {...formik.getFieldProps("price")}
                                                className={handleClasses("price", formik)}
                                                id="price"
                                                placeholder="Enter Your pricez"
                                            />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">{formik.errors.price}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mt-2">
                                            <label for="stock" className="form-label">Enter Product stock</label>
                                            <input
                                                type="number"
                                                {...formik.getFieldProps("stock")}
                                                className={handleClasses("stock", formik)}
                                                id="stock"
                                                placeholder="Enter Your stockz"
                                            />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">{formik.errors.stock}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mt-2">
                                            <label for="hero" className="form-label">Enter Product hero</label>
                                            <input
                                                type="text"
                                                {...formik.getFieldProps("hero")}
                                                className={handleClasses("hero", formik)}
                                                id="hero"
                                                placeholder="Enter Your hero"
                                            />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">{formik.errors.hero}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mt-2">
                                            <label for="desc" className="form-label">Enter Product desc</label>
                                            <textarea
                                                type="number"
                                                {...formik.getFieldProps("desc")}
                                                className={handleClasses("desc", formik)}
                                                id="desc"
                                                placeholder="Enter Your descz"
                                            ></textarea>
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">{formik.errors.desc}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mt-2">
                                            <label for="category" className="form-label">Enter Product category</label>

                                            <select
                                                type="number"
                                                {...formik.getFieldProps("category")}
                                                className={handleClasses("category", formik)}
                                                id="category"
                                                placeholder="Enter Your categoryz"
                                            >
                                                <option value="">Choose Category</option>
                                                <option value="electrinics">electrinics</option>
                                                <option value="clothing">clothing</option>
                                                <option value="grocery">grocery</option>
                                            </select>
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">{formik.errors.category}</div>
                                        </div>
                                    </div>

                                </div>

                                {
                                    selectedProduct
                                        ? <button type="submit" className="btn btn-lg btn-warning w-100 mt-3">
                                            Update Product
                                        </button>
                                        : <button type="submit" className="btn btn-lg btn-primary w-100 mt-3">
                                            Add Product
                                        </button>
                                }


                            </div>
                        </form>
                    </div>
                    {
                        data && <table class="table table-dark table-striped table-hover mt-2">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>price</th>
                                    <th>stock</th>
                                    <th>hero</th>
                                    <th>desc</th>
                                    <th>category</th>
                                    <th>isAvailable</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(item => <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.stock}</td>
                                        <td> <img src={item.hero} height={50} alt="" /></td>
                                        <td>{item.desc}</td>
                                        <td>{item.category}</td>
                                        <td>{item.isAvailable ? "Yes" : "No"}</td>
                                        <td>
                                            <button
                                                onClick={e => setSelectedProduct(item)}
                                                type="button"
                                                class="btn btn-sm btn-outline-warning me-2">
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                            <button
                                                onClick={e => deleteProduct(item.id)}
                                                type="button"
                                                class="btn btn-sm btn-outline-danger me-2">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    }

                </div>
            </div>
        </div>
    </>
}

/*
    name        -> text
    price       -> number
    stock       -> number
    hero        -> text image url
    desc        -> textarea
    category    -> select (electrinics, clothing, grocery) 
    isAvailable -> checkbox (default checked)
*/

export default AdminProducts