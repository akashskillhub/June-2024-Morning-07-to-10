import { useFormik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { useAddBlogMutation, useDeleteBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from '../redux/blogApi'

const Blogs = () => {
    const [preview, setPreview] = useState()
    const [isNew, setIsNew] = useState(false)
    const { data } = useGetBlogsQuery()
    const [addBlog, { isLoading: addBlogIsLoading, isSuccess: addBlogSuccess, isError: isErrorAddBlog }] = useAddBlogMutation()
    const [updateBlog, { isLoading: updateBlogIsLoading, isSuccess: updateBlogSuccess, isError: isErrorUpdateBlog }] = useUpdateBlogMutation()
    const [deleteBlog, { isLoading: deleteBlogIsLoading, isSuccess: deleteBlogSuccess, isError: isErrorDeleteBlog }] = useDeleteBlogMutation()

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
                const fd = new FormData()
                if (isNew) {
                    fd.append("title", values.title)
                    fd.append("desc", values.desc)
                    fd.append("oldHero", selectedBlog.hero)
                    fd.append("hero", selectedBlog.newHero)
                } else {
                    fd.append("title", values.title)
                    fd.append("desc", values.desc)
                }
                updateBlog({ fd, _id: selectedBlog._id })
                setSelectedBlog(null)
            } else {
                //              multipart
                const fd = new FormData()
                fd.append("title", values.title)
                fd.append("desc", values.desc)
                fd.append("hero", values.hero)
                addBlog(fd)
                // addBlog(values)
            }
            resetForm()
        }
    })

    if (addBlogIsLoading || updateBlogIsLoading || deleteBlogIsLoading) {
        return <div>
            Processing. Please Wait...
            <div class="spinner-border text-primary"></div>
        </div>
    }
    return <>
        {/* email */}
        {/* validation */}
        {/* pdfkit */}
        {/* cron */}
        <pre>{JSON.stringify(formik.errors)}</pre>
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("title")} type="text" placeholder='Enter title' />
            <input {...formik.getFieldProps("desc")} type="text" placeholder='Enter desc' />

            {
                selectedBlog
                    ? isNew
                        ? <div>
                            <input onChange={e => {
                                setPreview(URL.createObjectURL(e.target.files[0]))
                                setSelectedBlog({ ...selectedBlog, newHero: e.target.files[0] })
                            }} type="file" />
                            <button type='button' onClick={e => setIsNew(false)}>cancel</button>
                        </div>
                        : <div>
                            <img src={selectedBlog.hero} height={50} alt="" />
                            <button onClick={e => setIsNew(true)} type='button'>change image</button>
                        </div>

                    : <input
                        onChange={e => {
                            setPreview(URL.createObjectURL(e.target.files[0]))
                            formik.setFieldValue("hero", e.target.files[0])
                        }}
                        type="file" placeholder='Enter hero' />
            }

            {preview && <img src={preview} height={100} alt="" />}
            <hr />
            {
                selectedBlog
                    ? <button type='submit'>update blog</button>
                    : <button type='submit'>add blog</button>
            }
        </form>

        <table border={1}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Desc</th>
                    <th>Hero</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.result.map(item => <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td>
                            <img src={item.hero} height={50} alt="" />
                        </td>
                        <td>
                            <button onClick={e => setSelectedBlog(item)}>Edit</button>
                            <button onClick={e => deleteBlog(item._id)}> delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Blogs