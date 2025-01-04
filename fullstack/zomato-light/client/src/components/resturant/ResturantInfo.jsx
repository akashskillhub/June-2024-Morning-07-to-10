import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../../utils/handleClasses'
import { useResturantUpdateInfoMutation } from '../../redux/apis/resturantApi'

const ResturantInfo = () => {
    const [updateInfo, { isSuccess }] = useResturantUpdateInfoMutation()
    const formik = useFormik({
        initialValues: {
            mobile: "",
            address: "",
            city: "",
            certificate: "",
            type: "",
            hero: "",
            startTime: "",
            endTime: "",
        },
        validationSchema: yup.object({
            mobile: yup.string().required("Enter  mobile"),
            address: yup.string().required("Enter  address"),
            city: yup.string().required("Enter  city"),
            certificate: yup.string().required("Enter  certificate"),
            type: yup.string().required("Enter  type"),
            hero: yup.string().required("Enter  hero"),
            startTime: yup.string().required("Enter  startTime"),
            endTime: yup.string().required("Enter  endTime"),
        }),
        onSubmit: (values, { resetForm }) => {
            // fd
            const fd = new FormData()
            for (const key in values) {
                fd.append(key, values[key])
            }
            // mutation
            updateInfo(fd)
            resetForm()
        }
    })
    return <form onSubmit={formik.handleSubmit}>
        <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">

                            {/* ======================================= */}
                            <div className="mt-2">
                                <label for="mobile" className="form-label"> mobile</label>
                                <input
                                    {...formik.getFieldProps("mobile")}
                                    type="text"
                                    className={handleClasses(formik, "mobile")}
                                    id="mobile"
                                    placeholder="enter Your mobile"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.mobile}
                                </div>
                            </div>


                            <div className="mt-2">
                                <label for="address" className="form-label"> address</label>
                                <textarea
                                    {...formik.getFieldProps("address")}
                                    type="text"
                                    className={handleClasses(formik, "address")}
                                    id="address"
                                    placeholder="Enter Your address"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.address}
                                </div>
                            </div>

                            <div className="mt-2">
                                <label for="city" className="form-label"> city</label>
                                <input
                                    {...formik.getFieldProps("city")}
                                    type="text"
                                    className={handleClasses(formik, "city")}
                                    id="city"
                                    placeholder="Enter Your city"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.city}
                                </div>
                            </div>


                            <div className="mt-2">
                                <label for="certificate" className="form-label"> certificate</label>
                                <input
                                    // {...formik.getFieldProps("certificate")}
                                    type="file"
                                    onChange={e => formik.setFieldValue("certificate", e.target.files[0])}
                                    className={handleClasses(formik, "certificate")}
                                    id="certificate"
                                    placeholder="Enter Your certificate"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.certificate}
                                </div>
                            </div>


                            <div className="mt-2">
                                <label for="type" className="form-label"> type</label>
                                <select {...formik.getFieldProps("type")} className={handleClasses(formik, "type")}>
                                    <option selected >Choose Type</option>
                                    <option value="veg">veg</option>
                                    <option value="non-veg">non-veg</option>
                                </select>
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.type}
                                </div>
                            </div>

                            <div className="mt-2">
                                <label for="hero" className="form-label"> hero</label>
                                <input
                                    onChange={e => formik.setFieldValue("hero", e.target.files[0])}
                                    type="file"
                                    className={handleClasses(formik, "hero")}
                                    id="hero"
                                    placeholder="Confirm Your hero"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.hero}
                                </div>
                            </div>

                            <div className="mt-2">
                                <label for="startTime" className="form-label"> startTime</label>
                                <input
                                    {...formik.getFieldProps("startTime")}
                                    type="time"
                                    className={handleClasses(formik, "startTime")}
                                    id="startTime"
                                    placeholder="Confirm Your startTime"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.startTime}
                                </div>
                            </div>

                            <div className="mt-2">
                                <label for="endTime" className="form-label"> endTime</label>
                                <input
                                    {...formik.getFieldProps("endTime")}
                                    type="time"
                                    className={handleClasses(formik, "endTime")}
                                    id="endTime"
                                    placeholder="Confirm Your endTime"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.endTime}
                                </div>
                            </div>
                            {/* ========================================================= */}
                            <button type="submit" className="btn btn-primary w-100 mt-3">
                                Update Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default ResturantInfo