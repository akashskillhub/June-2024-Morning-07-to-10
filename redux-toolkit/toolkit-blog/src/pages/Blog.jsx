import clsx from 'clsx'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { addBlog, deleteBlog, getBlog, updateBlog } from '../redux/blogActions'

const Blog = () => {
    const callAction = useDispatch()
    const { loading, error, blogs, blogCreate, blogUpdate, blogDelete } = useSelector(state => state.allBlogs)
    const [selectedBlog, setSelectedBlog] = useState()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: selectedBlog ? selectedBlog.title : "",
            hero: selectedBlog ? selectedBlog.hero : "",
            desc: selectedBlog ? selectedBlog.desc : "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Enter name"),
            hero: yup.string().required("Enter hero"),
            desc: yup.string().required("Enter desc"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedBlog) {
                // update
                callAction(updateBlog({ ...selectedBlog, ...values }))
                setSelectedBlog(null)
            } else {
                // create
                callAction(addBlog(values))
            }
            resetForm()
        }
    })
    const handleClasses = arg => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[arg] && formik.errors[arg],
        "is-valid": formik.touched[arg] && !formik.errors[arg],

    })

    useEffect(() => { callAction(getBlog()) }, [blogCreate, blogUpdate, blogDelete])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Add Blog</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input
                                        className={handleClasses("title")}
                                        {...formik.getFieldProps("title")}
                                        type="text"
                                        placeholder='Enter Title' />
                                    <span className="invalid-feedback">{formik.errors.title}</span>
                                </div>
                                <div>
                                    <input
                                        className={handleClasses("hero")}
                                        {...formik.getFieldProps("hero")}
                                        type="text"
                                        placeholder='Enter Image URL' />
                                    <span className="invalid-feedback">{formik.errors.hero}</span>
                                </div>
                                <div>
                                    <textarea
                                        className={handleClasses("desc")}
                                        {...formik.getFieldProps("desc")}
                                        placeholder='Enter Description'></textarea>
                                    <span className="invalid-feedback">{formik.errors.desc}</span>
                                </div>
                                {
                                    selectedBlog
                                        ? <button className='btn btn-warning' type='submit'>Update Blog</button>
                                        : <button className='btn btn-dark' type='submit'>Add Blog</button>
                                }

                            </form>
                        </div>
                    </div>

                    <table class="table table-dark table-striped table-hover mt-5">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Hero</th>
                                <th>Desc</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs && blogs.map(item => <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td><img src={item.hero} height={100} alt="" /></td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <button onClick={e => setSelectedBlog(item)} className='btn btn-sm btn-outline-warning mx-2'>Edit</button>
                                        <button onClick={e => callAction(deleteBlog(item.id))} className='btn btn-sm btn-outline-danger mx-2'>Delete</button>
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