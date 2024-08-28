import { useFormik } from 'formik'
import * as yup from 'yup'
import api from '../util/api'

const BlogForm = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            hero: "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Enter Title"),
            desc: yup.string().required("Enter Desc"),
            hero: yup.string().required("Enter Hero"),
        }),
        onSubmit: async (values, { resetForm }) => {
            await api.post("/articles", values)
            console.log("Blog Create Success")
            resetForm()
        }
    })
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    className={`form-control my-2 ${formik.touched.title && formik.errors.title && "is-invalid"}`}
                    type="text" {...formik.getFieldProps("title")} />
                <span className='invalid-feedback'>{formik.errors.title}</span>
            </div>
            <div>
                <input
                    className={`form-control my-2 ${formik.touched.hero && formik.errors.hero && "is-invalid"}`}
                    type="text" {...formik.getFieldProps("hero")} />
                <span className='invalid-feedback'>{formik.errors.hero}</span>
            </div>
            <div>
                <textarea
                    className={`form-control my-2 ${formik.touched.desc && formik.errors.desc && "is-invalid"}`}
                    {...formik.getFieldProps("desc")}></textarea>
                <span className='invalid-feedback'>{formik.errors.desc}</span>
            </div>
            <button className='btn btn-lg btn-dark w-100 mt-3' type='submit'>Add Blog</button>
        </form>
    </>
}

export default BlogForm