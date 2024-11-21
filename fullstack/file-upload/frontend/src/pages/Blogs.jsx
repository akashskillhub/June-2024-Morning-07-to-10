import { useFormik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { useAddBlogMutation, useDeleteBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from '../redux/blogApi'

const Blogs = () => {
    const [preview, setpreview] = useState()
    const { data } = useGetBlogsQuery()
    const [addBlog, { isSuccess: addBlogSuccess, isError: isErrorAddBlog }] = useAddBlogMutation()
    const [updateBlog, { isSuccess: updateBlogSuccess, isError: isErrorUpdateBlog }] = useUpdateBlogMutation()
    const [deleteBlog, { isSuccess: deleteBlogSuccess, isError: isErrorDeleteBlog }] = useDeleteBlogMutation()

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
                updateBlog({ ...values, _id: selectedBlog._id })
                setSelectedBlog(null)
            } else {
                //              👇 handle multipart
                const fd = new FormData()
                fd.append("title", values.title)
                fd.append("desc", values.desc)
                fd.append("hero", values.hero)
                addBlog(fd)
            }
            resetForm()
        }
    })
    return <>
        <pre>{JSON.stringify(formik.errors)}</pre>
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("title")} type="text" placeholder='Enter title' />
            <input {...formik.getFieldProps("desc")} type="text" placeholder='Enter desc' />
            <input onChange={e => {
                setpreview(URL.createObjectURL(e.target.files[0]))
                formik.setFieldValue("hero", e.target.files[0])
            }} type="file" placeholder='Enter hero' />

            {preview && <img src={preview} height={50} alt="" />}
            {
                selectedBlog
                    ? <button type='submit'>update blog</button>
                    : <button type='submit'>add blog</button>
            }
        </form>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Desc</th>
                    <th>Hero</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {/* <tbody>
                {
                    data && data.result.map(item => <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td>{item.hero}</td>
                        <td>
                            <button onClick={e => setSelectedBlog(item)}>Edit</button>
                            <button onClick={e => deleteBlog(item._id)}> delete</button>
                        </td>
                    </tr>)
                }
            </tbody> */}
        </table>
    </>
}

export default Blogs