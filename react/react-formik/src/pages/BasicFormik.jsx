import { useFormik } from 'formik'
import * as yup from 'yup'

const BasicFormik = () => {
    const formik = useFormik({
        initialValues: { fname: "", lname: "" },
        validationSchema: yup.object({
            fname: yup.string().required().min(3),
            lname: yup.string().required().min(3).max(5),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })
    return <>
        {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(formik.errors, null, 2)}</pre> */}

        <form onSubmit={formik.handleSubmit}>
            <div>
                <input type="text" {...formik.getFieldProps("fname")} />
                <p className='text-danger'>{formik.errors.fname}</p>
            </div>
            <div>
                <input type="text" {...formik.getFieldProps("lname")} />
                <p className='text-danger'>{formik.errors.lname}</p>
            </div>

            <button type='button'>normal button</button>
            <button type='submit'>submit button</button>
        </form>
    </>
}

export default BasicFormik