import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import clsx from 'clsx'
import { useAddBlogMutation, useDeletBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from '../redux/blogApi'
import { toast } from 'react-toastify'
const Blogs = () => {

    const { data } = useGetBlogsQuery()

    const [addBlog, {
        isSuccess: addBlogSuccess,
        isError: addBlogIsError,
        error: addBlogError,
        isLoading: addBlogIsLoading
    }] = useAddBlogMutation()

    const [updateBlog, {
        isSuccess: updateBlogSuccess,
        isError: updateBlogIsError,
        error: updateBlogError,
        isLoading: updateBlogIsLoading
    }] = useUpdateBlogMutation()

    const [deleteBlog, {
        isSuccess: deleteBlogSuccess,
        isError: deleteBlogIsError,
        error: deleteBlogError,
        isLoading: deleteBlogIsLoading
    }] = useDeletBlogMutation()

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
                // update
                updateBlog({ ...selectedBlog, ...values })
                setSelectedBlog(null)
            } else {
                // add
                addBlog(values)
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
        if (addBlogSuccess) {
            toast.success("Blog Create Success")
        }
    }, [addBlogSuccess])
    useEffect(() => {
        if (addBlogIsError) {
            toast.error(JSON.stringify(addBlogError))
        }
    }, [addBlogIsError])

    // update toast
    useEffect(() => {
        if (updateBlogSuccess) {
            toast.success("Blog Update Success")
        }
    }, [updateBlogSuccess])
    useEffect(() => {
        if (updateBlogIsError) {
            toast.error(JSON.stringify(updateBlogError))
        }
    }, [updateBlogIsError])


    // delete toast
    useEffect(() => {
        if (deleteBlogSuccess) {
            toast.success("Blog Delete Success")
        }
    }, [deleteBlogSuccess])
    useEffect(() => {
        if (deleteBlogIsError) {
            toast.error(JSON.stringify(deleteBlogError))
        }
    }, [deleteBlogIsError])


    if (addBlogIsLoading || updateBlogIsLoading || deleteBlogIsLoading) {
        return <div>
            Please Wait ... <div className="spinner-border text-primary"></div>
        </div>
    }

    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Blog</div>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input {...formik.getFieldProps("title")} placeholder='Enter title' type="text" className={handleClasses("title")} />
                                    <span className='invalid-feedback'>{formik.errors.title}</span>
                                </div>
                                <div>
                                    <input {...formik.getFieldProps("desc")} placeholder='Enter desc' type="text" className={handleClasses("desc")} />
                                    <span className='invalid-feedback'>{formik.errors.desc}</span>
                                </div>
                                <div>
                                    <input {...formik.getFieldProps("hero")} placeholder='Enter hero' type="text" className={handleClasses("hero")} />
                                    <span className='invalid-feedback'>{formik.errors.hero}</span>
                                </div>

                                {
                                    selectedBlog
                                        ? <button type="submit" className="w-100 btn btn-warning"> Update  </button>
                                        : <button type="submit" className="w-100 btn btn-primary "> Add  </button>
                                }
                            </form>
                        </div>
                    </div>

                    {
                        data && <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>title</th>
                                    <th>desc</th>
                                    <th>hero</th>
                                    <th>actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.result.map(item => <tr key={item._id}>
                                        <td>{item.title}</td>
                                        <td>{item.desc}</td>
                                        <td>
                                            <img src={item.hero} height={100} alt={item.title} />
                                        </td>
                                        <td>
                                            <button onClick={e => setSelectedBlog(item)} type="button" class="btn btn-outline-warning btn-sm mx-2"> <i className="bi bi-pencil"></i> </button>
                                            <button onClick={e => deleteBlog(item._id)} type="button" class="btn btn-outline-danger btn-sm mx-2"> <i className="bi bi-trash"></i> </button>
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

export default Blogs