import clsx from 'clsx'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import {
    useAddBlogMutation,
    useDeleteBlogMutation,
    useGetBlogQuery,
    useUpdateBlogMutation
} from '../redux/blogApi'
import { toast } from 'react-toastify'

const Blog = () => {
    const [createBlog, { isSuccess: createSuccess, isError: createIsError, error: createError }] = useAddBlogMutation()
    const [udpateBlog, { isSuccess: updateSuccess }] = useUpdateBlogMutation()
    const [deleteBlog, { isSuccess: deleteSuccess }] = useDeleteBlogMutation()

    const { data } = useGetBlogQuery()

    const [selectedBlog, setSelectedBlog] = useState()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: selectedBlog ? selectedBlog.title : "",
            desc: selectedBlog ? selectedBlog.desc : "",
            hero: selectedBlog ? selectedBlog.hero : "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Enter title"),
            desc: yup.string().required("Enter desc"),
            hero: yup.string().required("Enter hero"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedBlog) {
                udpateBlog({ ...selectedBlog, ...values })
                console.log("Update Success");
                setSelectedBlog(null)
            } else {
                createBlog(values)
                console.log("Add Success");
            }
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    useEffect(() => {
        if (createSuccess) {
            toast.success("Blog Create Success")
        }
        if (createIsError) {
            toast.error(JSON.stringify(createError, null, 2))
        }
    }, [createSuccess, createIsError])
    useEffect(() => {
        if (updateSuccess) {
            toast.warn("Blog Update Success")
        }
    }, [updateSuccess])
    useEffect(() => {
        if (deleteSuccess) {
            toast.error("Blog Delete Success")
        }
    }, [deleteSuccess])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">RTK Blog CRUD</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">
                                <div>
                                    <input
                                        placeholder='Enter title'
                                        type="text"
                                        className={handleClasses("title")}
                                        {...formik.getFieldProps('title')} />
                                    <span className="invalid-feedback">{formik.errors.title}</span>
                                </div>
                                <div>
                                    <input
                                        placeholder='Enter desc'
                                        type="text"
                                        className={handleClasses("desc")}
                                        {...formik.getFieldProps('desc')} />
                                    <span className="invalid-feedback">{formik.errors.desc}</span>
                                </div>
                                <div>
                                    <input
                                        placeholder='Enter hero'
                                        type="text"
                                        className={handleClasses("hero")}
                                        {...formik.getFieldProps('hero')} />
                                    <span className="invalid-feedback">{formik.errors.hero}</span>
                                </div>
                                {
                                    selectedBlog
                                        ? <button type="submit" class="mt-3 w-100 btn btn-warning">Update Blog</button>
                                        : <button type="submit" class="mt-3 w-100 btn btn-primary">Add Blog</button>
                                }

                            </div>
                        </form>
                    </div>

                    <table className="table table-dark table-striped table-hover mt-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>title</th>
                                <th>desc</th>
                                <th>hero</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map(item => <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <img src={item.hero} height={50} alt="" />
                                    </td>
                                    <td>
                                        <button onClick={e => setSelectedBlog(item)}>edit</button>
                                        <button onClick={e => deleteBlog(item.id)}>delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default Blog