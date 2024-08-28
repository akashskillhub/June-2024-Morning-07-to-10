import { useFormik } from 'formik'
import * as yup from 'yup'
import clsx from 'clsx'
import api from '../util/api'

const BlogForm = ({ success, setSuccess, selectedBlog }) => {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: selectedBlog ? selectedBlog.title : "",
            hero: selectedBlog ? selectedBlog.hero : "",
            desc: selectedBlog ? selectedBlog.desc : '',
        },
        validationSchema: yup.object({
            title: yup.string().required("Enter Title"),
            hero: yup.string().required("Enter Hero Image URL"),
            desc: yup.string().required("Enter Description"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                if (selectedBlog) {
                    await api.patch("/articles/" + selectedBlog.id, values)
                    console.log("Blog Update Success")
                } else {
                    await api.post("/articles", values)
                    console.log("Blog Create Success")
                }

                setSuccess(!success)
                resetForm()
            } catch (error) {
                console.log(error)
            }
        }
    })

    const handleClasses = arg => clsx({
        "is-invalid": formik.touched[arg] && formik.errors[arg],
        "form-control my-2": true
    })



    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    className={handleClasses("title")}
                    type="text"
                    {...formik.getFieldProps("title")} />
                <span className='invalid-feedback'>{formik.errors.title}</span>
            </div>
            <div>
                <input
                    className={handleClasses("hero")}
                    type="text"
                    {...formik.getFieldProps("hero")} />
                <span className='invalid-feedback'>{formik.errors.hero}</span>
            </div>
            <div>
                <textarea
                    className={handleClasses("desc")}
                    {...formik.getFieldProps("desc")} ></textarea>
                <span className='invalid-feedback'>{formik.errors.desc}</span>
            </div>
            {
                selectedBlog
                    ? <button data-bs-dismiss="modal" className='btn btn-warning w-100 btn-lg' type='submit'>Update Blog</button>
                    : <button className='btn btn-dark w-100 btn-lg' type='submit'>Add Blog</button>
            }

        </form>
    </>
}

export default BlogForm