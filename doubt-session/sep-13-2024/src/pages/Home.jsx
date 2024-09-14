import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Home = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
        }),
        onSubmit: (values, { resetForm }) => {
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key]
    })


    return <>
        <pre>{JSON.stringify(formik.values, null, 2)}</pre>
        <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
        <pre>{JSON.stringify(formik.touched, null, 2)}</pre>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    className={handleClasses("name")}
                    type="text"
                    {...formik.getFieldProps("name")}
                />
                <span className="invalid-feedback">{formik.errors.name}</span>
                <span className="valid-feedback">thank ypou</span>
            </div>
            <button type='submit'>save</button>
        </form>
    </>
}

export default Home