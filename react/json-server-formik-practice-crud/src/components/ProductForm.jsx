import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'
import api from '../utile/api'

const ProductForm = ({ selectedProduct, success, setSuccess }) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedProduct ? selectedProduct.name : "",
            desc: selectedProduct ? selectedProduct.desc : "",
            price: selectedProduct ? selectedProduct.price : "",
            category: selectedProduct ? selectedProduct.category : "",
            isAvailable: selectedProduct ? selectedProduct.isAvailable : "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter name"),
            desc: yup.string().required("Enter desc"),
            price: yup.string().required("Enter price"),
            category: yup.string().required("Enter category"),
            isAvailable: yup.string().required("Enter isAvailable"),
        }),
        onSubmit: async (values, { resetForm }) => {
            if (selectedProduct) {
                await api.patch("/products/" + selectedProduct.id, values)
                console.log("edit success")
                setSuccess(!success)
            } else {
                await api.post("/products", values)
                console.log("create success")
                setSuccess(!success)
            }
            resetForm()
        }
    })

    const handleClasses = arg => clsx({
        "form-control my-2": arg !== "isAvailable",
        "form-check-input": arg === "isAvailable",
        "is-invalid": formik.touched[arg] && formik.errors[arg],
        "is-valid": formik.touched[arg] && !formik.errors[arg],
    })
    return <>

        <form onSubmit={formik.handleSubmit}>

            <div>
                <input className={handleClasses("name")} type="text" placeholder='Enter Name' {...formik.getFieldProps("name")} />
                <span className='invalid-feedback'>{formik.errors.name}</span>
            </div>
            <div>
                <input className={handleClasses("desc")} type="text" placeholder='Enter Desciption' {...formik.getFieldProps("desc")} />
                <span className='invalid-feedback'>{formik.errors.desc}</span>
            </div>
            <div>
                <input className={handleClasses("price")} type="text" placeholder='Enter Price' {...formik.getFieldProps("price")} />
                <span className='invalid-feedback'>{formik.errors.price}</span>
            </div>
            <div>
                <select {...formik.getFieldProps("category")} className={handleClasses("category")}>
                    <option value="">Choose Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="appliences">Home Appliences</option>
                    <option value="furniture">Furniture</option>
                    <option value="other">Other</option>
                </select>
                <span className='invalid-feedback'>{formik.errors.category}</span>
            </div>

            <div>
                <input
                    className={handleClasses("isAvailable")}
                    {...formik.getFieldProps("isAvailable")}
                    name='isAvailable'
                    id='available'
                    value="yes"
                    type="radio" />
                <label htmlFor="available">available</label>
                <input
                    className={handleClasses("isAvailable")}
                    {...formik.getFieldProps("isAvailable")}
                    name='isAvailable'
                    id='unavailable'
                    value="no"
                    type="radio" />
                <label htmlFor="unavailable">unavailable</label>
                <span className='invalid-feedback'>{formik.errors.isAvailable}</span>
            </div>

            {
                selectedProduct
                    ? <button data-bs-dismiss="modal" className='btn btn-warning w-100 btn-lg mt-3' type='submit'>update Product</button>
                    : <button className='btn btn-dark w-100 btn-lg mt-3' type='submit'>Add Product</button>
            }



        </form>
    </>
}

export default ProductForm