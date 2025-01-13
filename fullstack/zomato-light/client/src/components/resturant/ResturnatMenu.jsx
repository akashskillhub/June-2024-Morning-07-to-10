import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useLazyResturantGetMenuQuery, useResturantAddMenuMutation, useResturantDeleteMenuMutation, useResturantUpdateMenuMutation } from '../../redux/apis/resturantApi'
import { useEffect, useState } from 'react'
const ResturnatMenu = () => {
    const [updateMenu, { isSuccess: updateMenuSuccess }] = useResturantUpdateMenuMutation()
    const [show, setShow] = useState(true)
    const [selectedMenu, setSelectedMenu] = useState()
    const [deleteMenu, { isSuccess: deleteSuccess }] = useResturantDeleteMenuMutation()
    const [getMenu, { data }] = useLazyResturantGetMenuQuery()

    const [addMenu, { isSuccess, isError, error, isLoading }] = useResturantAddMenuMutation()
    const formik = useFormik({
        initialValues: {
            menu: [
                { type: "", category: "", name: "poha", price: "", desc: "", image: "" }
            ],
        },
        validationSchema: yup.object({
            menu: yup.array().of(yup.object({
                type: yup.string().required(),
                category: yup.string().required(),
                name: yup.string().required(),
                price: yup.string().required(),
                desc: yup.string().required(),
                image: yup.string().required(),
            }))
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            const fd = new FormData()

            for (const item of values.menu) {
                for (const key in item) {
                    fd.append(key, item[key])
                }
            }
            addMenu(fd)
            resetForm()
        }
    })

    const updateFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            type: selectedMenu ? selectedMenu.type : "",
            category: selectedMenu ? selectedMenu.category : "",
            name: selectedMenu ? selectedMenu.name : "",
            price: selectedMenu ? selectedMenu.price : "",
            desc: selectedMenu ? selectedMenu.desc : "",
            image: "",
        },
        validationSchema: yup.object({
            type: yup.string().required(),
            category: yup.string().required(),
            name: yup.string().required(),
            price: yup.string().required(),
            desc: yup.string().required(),
            image: yup.string(),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            for (const key in values) {
                fd.append(key, values[key])
            }
            updateMenu({ fd, _id: selectedMenu._id })
            resetForm()
        }
    })
    const handleAddFields = () => {
        formik.setFieldValue("menu", [
            ...formik.values.menu,
            { type: "", category: "", name: "", price: "", desc: "", image: "" }
        ])

    }
    const handleRemoveFields = index => {
        const copy = [...formik.values.menu]
        copy.splice(index, 1)
        formik.setFieldValue("menu", copy)
    }

    const handleClassNames = (i, key) => clsx({
        "form-control my-2": true,
        "is-invalid":
            (formik.touched?.menu && formik.touched?.menu[i]?.[key])
            &&
            (formik.errors?.menu && formik.errors?.menu[i]?.[key]),

        "is-valid":
            (formik.touched?.menu && formik.touched?.menu[i]?.[key])
            &&
            (formik.errors?.menu && !formik.errors?.menu[i]?.[key])
    })

    const handleImage = (i, e) => {
        const { files } = e.target
        formik.setFieldValue(`menu[${i}].image`, files[0])
    }
    useEffect(() => {
        getMenu()
    }, [])
    useEffect(() => {
        if (deleteSuccess) {
            toast.success("menu delete success")
        }
    }, [deleteSuccess])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div className="container">

                {
                    formik.values.menu.map((item, i) => <div key={i} className="card my-3">
                        <div className="card-header d-flex justify-content-between">
                            <span> Menu {i + 1}</span>
                            {
                                i === 0
                                    ? <button className='btn btn-sm btn-dark' type='button' onClick={handleAddFields}>add</button>
                                    : <button type='button' className='btn btn-sm btn-outline-danger' onClick={e => handleRemoveFields(i)}>remove</button>
                            }
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-sm-4">
                                    <select
                                        className={handleClassNames(i, "type")}
                                        name={`menu[${i}].type`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.menu[i].type}>
                                        <option value="">choose type</option>
                                        <option value="veg">veg</option>
                                        <option value="non-veg">non veg</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                    <select
                                        className={handleClassNames(i, "category")}
                                        name={`menu[${i}].category`}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.menu[i].category}>
                                        <option value="">choose category</option>
                                        <option value="main">Main Course</option>
                                        <option value="chinese">Chinese</option>
                                        <option value="punjabi">Punjabi</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                    <input
                                        onBlur={formik.handleBlur}
                                        className={handleClassNames(i, "name")}
                                        name={`menu[${i}].name`}
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.menu[i].name}
                                        type="text" />
                                </div>
                                <div className="col-sm-4">

                                    <input
                                        className={handleClassNames(i, "price")}
                                        name={`menu[${i}].price`}
                                        onChange={formik.handleChange}
                                        value={formik.values.menu[i].price}
                                        type="number" />
                                </div>
                                <div className="col-sm-4">
                                    <textarea
                                        className={handleClassNames(i, "desc")}
                                        name={`menu[${i}].desc`}
                                        onChange={formik.handleChange}
                                        value={formik.values.menu[i].desc}
                                    ></textarea>
                                </div>
                                <div className="col-sm-4">
                                    <input

                                        onChange={e => handleImage(i, e)}
                                        className={handleClassNames(i, "image")}
                                        type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
                <button type="submit" class="btn btn-primary my-3 w-100 btn-lg">Add Menu</button>
            </div>
        </form>

        <div className="container">
            {
                data && <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>category</th>
                            <th>price</th>
                            <th>desc</th>
                            <th>image</th>
                            <th>type</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.result.map(item => <tr className={`${item.type === "veg" ? "table-success" : "table-danger"}`} key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.desc}</td>
                                <td>
                                    <img src={item.image} height={50} alt="" />
                                </td>
                                <td >{item.type}</td>
                                <td>
                                    <button onClick={e => setSelectedMenu(item)} data-bs-toggle="modal" data-bs-target="#editMenu" type="button" class="btn btn-outline-warning me-2">Edit</button>
                                    <button onClick={e => deleteMenu(item._id)} type="button" class="btn btn-outline-danger">Remove</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>




        <div className="modal fade" id="editMenu" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={updateFormik.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <select
                                        {...updateFormik.getFieldProps("type")}
                                        className="form-control my-2">
                                        <option value="">choose type</option>
                                        <option value="veg">veg</option>
                                        <option value="non-veg">non veg</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <select
                                        {...updateFormik.getFieldProps("category")}
                                        className="form-control my-2">
                                        <option value="">choose category</option>
                                        <option value="main">Main Course</option>
                                        <option value="chinese">Chinese</option>
                                        <option value="punjabi">Punjabi</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        {...updateFormik.getFieldProps("name")}
                                        className="form-control my-2"
                                        placeholder='name'
                                        type="text" />
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        {...updateFormik.getFieldProps("price")}
                                        className="form-control my-2"
                                        placeholder='price'
                                        type="number" />
                                </div>
                                <div className="col-sm-6">
                                    <textarea
                                        {...updateFormik.getFieldProps("desc")}
                                        className="form-control my-2"
                                        placeholder='desc' ></textarea>
                                </div>
                                <div className="col-sm-6">
                                    {
                                        show
                                            ? <>
                                                <img src={selectedMenu && selectedMenu.image} height={50} alt="" />
                                                <button onClick={e => setShow(false)} type="button" class="btn btn-primary btn-sm">Change</button>
                                            </>
                                            : <>
                                                <input
                                                    onChange={e => updateFormik.setFieldValue("image", e.target.files[0])}
                                                    className="form-control my-2"
                                                    type="file" />
                                                <button onClick={e => setShow(true)} type="button" class="btn btn-primary btn-sm">Cancel</button>
                                            </>
                                    }

                                </div>
                            </div>
                            <button type="submit" class="btn btn-warning w-100 my-3">Update Menu</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ResturnatMenu