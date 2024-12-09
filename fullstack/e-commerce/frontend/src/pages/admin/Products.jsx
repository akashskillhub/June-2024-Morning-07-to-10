import { Button, Card, Container, FormControl, Spinner } from "react-bootstrap"
import { useAddAdminProductMutation, useDeleteAdminProductMutation, useGetAdminProductQuery, useUpdateAdminProductMutation } from "../../redux/admin/adminApi"
import { useFormik } from "formik"
import * as yup from "yup"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const Products = () => {
    const [newHero, setNewHero] = useState(false)
    const [remove, setRemove] = useState([])
    const [preview, setPreview] = useState([])
    const { data } = useGetAdminProductQuery()
    const [deleteProduct, { isSuccess: deleteSuccess, isLoading: deleteIsLoading }] = useDeleteAdminProductMutation()
    const [addProduct, { isSuccess, isLoading }] = useAddAdminProductMutation()
    const [updateProduct, { isSuccess: updateSuccess, isLoading: updateIsLoading }] = useUpdateAdminProductMutation()
    const [selectedProduct, setSelectedProduct] = useState()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedProduct ? selectedProduct.name : "",
            desc: selectedProduct ? selectedProduct.desc : "",
            price: selectedProduct ? selectedProduct.price : "",
            qty: selectedProduct ? selectedProduct.qty : "",
            hero: selectedProduct ? selectedProduct.hero : "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter name"),
            desc: yup.string().required("Enter desc"),
            price: yup.string().required("Enter price"),
            qty: yup.string().required("Enter qty"),
            // hero: yup.string().required("Enter hero"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedProduct) {
                // update
                console.log("update called");
                const fd = new FormData()
                for (const key in values) {
                    if (key !== "hero") {
                        fd.append(key, values[key])
                    }
                }
                for (const item of remove) {
                    fd.append("remove", item)
                }
                for (const item of values.hero) {
                    fd.append("hero", item)
                }
                updateProduct({ _id: selectedProduct._id, fd })
                setSelectedProduct(null)
                setRemove([])
            } else {
                // add
                const fd = new FormData()
                for (const key in values) {
                    if (key !== "hero") {
                        fd.append(key, values[key])
                    }
                }
                for (const item of values.hero) {
                    fd.append("hero", item)
                }
                addProduct(fd)
            }
            setPreview([])
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        'form-control my-2': true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("product create success")

        }
    }, [isSuccess])
    useEffect(() => {
        if (deleteSuccess) {
            toast.success("product delete success")
        }
    }, [deleteSuccess])
    return <Container>
        {
            isLoading || deleteIsLoading || updateIsLoading
                ? <>Please Wait ... <Spinner></Spinner> </>
                : <Card className="mb-5">
                    <Card.Header>Product</Card.Header>
                    <Card.Body>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl
                                className={handleClasses("name")}
                                placeholder="Enter Product Name"
                                {...formik.getFieldProps("name")} />
                            <FormControl
                                className={handleClasses("desc")}
                                placeholder="Enter Product Description"
                                {...formik.getFieldProps("desc")} />
                            <FormControl
                                type="number"
                                className={handleClasses("price")}
                                placeholder="Enter Product Price"
                                {...formik.getFieldProps("price")} />
                            <FormControl
                                type="number"
                                className={handleClasses("qty")}
                                placeholder="Enter Product Qty"
                                {...formik.getFieldProps("qty")} />
                            {
                                selectedProduct
                                    ? <>
                                        {
                                            selectedProduct.hero.map(item => <div>
                                                <div className={`${remove.includes(item) && "border border-danger my-2"} d-flex justify-content-between align-items-center px-4`}>

                                                    <img
                                                        src={item}
                                                        height={100}
                                                        className="me-2 rounded-3"
                                                        alt="" />

                                                    {
                                                        remove.includes(item)
                                                            ? <Button onClick={e => setRemove(remove.filter(r => item !== r))} variant="dark">cancel</Button>
                                                            : <Button variant="danger" onClick={e => {
                                                                if (!remove.includes(item)) {
                                                                    setRemove([...remove, item])
                                                                }
                                                            }}>Remove</Button>
                                                    }
                                                </div>

                                            </div>)
                                        }
                                        {
                                            newHero
                                                ? <>
                                                    <FormControl
                                                        type="file"
                                                        multiple
                                                        onChange={e => {
                                                            const x = []
                                                            for (const item of e.target.files) {
                                                                x.push(URL.createObjectURL(item))
                                                            }
                                                            setPreview(x)
                                                            formik.setFieldValue("hero", e.target.files)
                                                        }}
                                                        className={handleClasses("hero")}
                                                        placeholder="Enter Product Hero"
                                                    />
                                                    <Button onClick={e => setNewHero(false)} variant="dark">cancel</Button>
                                                </>
                                                : <Button
                                                    onClick={e => setNewHero(true)}
                                                    className="my-3">
                                                    Add New Image
                                                </Button>
                                        }

                                    </>
                                    : <>
                                        <FormControl
                                            type="file"
                                            multiple
                                            onChange={e => {
                                                const x = []
                                                for (const item of e.target.files) {
                                                    x.push(URL.createObjectURL(item))
                                                }
                                                formik.setFieldValue("hero", e.target.files)
                                                setPreview(x)
                                            }}
                                            className={handleClasses("hero")}
                                            placeholder="Enter Product Hero"
                                        />
                                    </>
                            }
                            {
                                preview.map(item => <img src={item} height={50} alt="" />)
                            }
                            {
                                selectedProduct
                                    ? <>
                                        <Button
                                            type="submit"
                                            variant="warning"
                                            className="w-100 btn-lg">Update Product</Button>
                                        <Button
                                            type="button"
                                            onClick={e => setSelectedProduct(null)}
                                            variant="outline-dark"
                                            className="w-100 btn-lg mt-3">Cancel</Button>
                                    </>
                                    : <Button type="submit" className="w-100 btn-lg">Add Product</Button>
                            }

                        </form>
                    </Card.Body>
                </Card>
        }


        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>name</th>
                    <th>desc</th>
                    <th>price</th>
                    <th>qty</th>
                    <th>hero</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.result.map(item => <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.desc}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>{item.hero.map(h => <img src={h} height={50} className="mx-2 rounded-2" alt="" />)}</td>
                        <td>
                            <Button onClick={e => setSelectedProduct(item)} className="me-2" variant="warning">Edit</Button>
                            <Button className="me-2" variant="danger" onClick={e => deleteProduct(item._id)}>Remove</Button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </Container>
}

export default Products