import { useFormik } from 'formik'
import * as yup from 'yup'
import React, { useEffect, useState } from 'react'
import { handleClasses } from '../../utils/handleClasses'
import { toast } from 'react-toastify'
import {
    useAdminUpdateRiderAccountMutation,
    useAdminUpdateRiderMutation,
    useLazyAdminGetRiderQuery,
    useRiderRegisterAdminMutation
} from '../../redux/apis/admin.api'

import { format } from "date-fns"
const Rider = () => {
    const [updateAccount, { isSuccess: accountUpdateSuccess }] = useAdminUpdateRiderAccountMutation()
    const [show, setShow] = useState(true)
    const [pagi, setPagi] = useState({ limit: 2, skip: 0 })
    const [selectedRider, setSelectedRider] = useState()
    const [registerRider, { isError, isLoading, error, isSuccess }] = useRiderRegisterAdminMutation()
    const [updateRider, { isSuccess: updateRiderIsSuccess, isError: updateRiderIsError, isLoading: updateRiderIsLoading, error: updateRiderError }] = useAdminUpdateRiderMutation()
    const [getRider, { data }] = useLazyAdminGetRiderQuery()

    if (isError) {
        console.log(error);
    }

    if (updateRiderIsError) {
        console.log(error);
    }

    useEffect(() => {
        if (updateRiderIsSuccess) {
            toast.success("update rider success")
        }
    }, [updateRiderIsSuccess])

    useEffect(() => {
        if (accountUpdateSuccess) {
            toast.success("Account update  success")
        }
    }, [accountUpdateSuccess])


    useEffect(() => { getRider(pagi) }, [pagi])

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            address: "",
            city: "",
            dob: "",
            gender: "",
            licence: "",
            rc: "",
            profile: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter  Name"),
            email: yup.string().required("Enter  Email"),
            mobile: yup.string().required("Enter  mobile"),
            address: yup.string().required("Enter  address"),
            city: yup.string().required("Enter  city"),
            dob: yup.string().required("Enter  dob"),
            gender: yup.string().required("Enter  gender"),
            licence: yup.string().required("Enter  licence"),
            rc: yup.string().required("Enter  hero"),
            profile: yup.string().required("Enter  profile"),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            for (const key in values) {
                fd.append(key, values[key])
            }
            registerRider(fd)
            resetForm()
        }
    })

    const RiderFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedRider ? selectedRider.name : "",
            email: selectedRider ? selectedRider.email : "",
            mobile: selectedRider ? selectedRider.mobile : "",
            address: selectedRider ? selectedRider.address : "",
            city: selectedRider ? selectedRider.city : "",
            dob: selectedRider ? format(selectedRider.dob, "yyyy-MM-dd") : "",
            gender: selectedRider ? selectedRider.gender : "",
            profile: selectedRider ? selectedRider.profile : "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter type"),
            email: yup.string().required("Enter category"),
            mobile: yup.string().required("Enter name"),
            address: yup.string().required("Enter price"),
            city: yup.string().required("Enter desc"),
            dob: yup.string().required("Enter desc"),
            gender: yup.string().required("Enter desc"),
            profile: yup.string().required("Enter desc"),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            for (const key in values) {
                fd.append(key, values[key])
            }
            updateRider({ fd, _id: selectedRider._id })
            resetForm()
        }
    })


    useEffect(() => {
        if (isSuccess) {
            toast.success("rider register success")
        }
    }, [isSuccess])

    return <>
        <form onSubmit={formik.handleSubmit}>
            <div className="container">
                <div className="card">
                    <div className="card-header">Rider Register</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6 mt-2">
                                <label for="name" className="form-label"> name</label>
                                <input
                                    {...formik.getFieldProps("name")}
                                    type="text"
                                    className={handleClasses(formik, "name")}
                                    id="name"
                                    placeholder="enter Your name"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.name}
                                </div>
                            </div>

                            <div className="col-sm-6 mt-2">
                                <label for="mobile" className="form-label"> mobile</label>
                                <input
                                    {...formik.getFieldProps("mobile")}
                                    type="number"
                                    className={handleClasses(formik, "mobile")}
                                    id="mobile"
                                    placeholder="enter Your mobile"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.mobile}
                                </div>
                            </div>

                            <div className="col-sm-6 mt-2">
                                <label for="email" className="form-label"> email</label>
                                <input
                                    {...formik.getFieldProps("email")}
                                    type="email"
                                    className={handleClasses(formik, "email")}
                                    id="email"
                                    placeholder="enter Your email"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.email}
                                </div>
                            </div>


                            <div className="col-sm-6 mt-2">
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

                            <div className="col-sm-6 mt-2">
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

                            <div className="col-sm-6 mt-2">
                                <label for="dob" className="form-label"> dob</label>
                                <input
                                    {...formik.getFieldProps("dob")}
                                    type="date"
                                    className={handleClasses(formik, "dob")}
                                    id="dob"
                                    placeholder="Enter Your dob"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.dob}
                                </div>
                            </div>


                            <div className="col-sm-6 mt-2">
                                <label for="licence" className="form-label"> licence</label>
                                <input
                                    type="file"
                                    onChange={e => formik.setFieldValue("licence", e.target.files[0])}
                                    className={handleClasses(formik, "licence")}
                                    id="licence"
                                    placeholder="Enter Your licence"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.licence}
                                </div>
                            </div>

                            <div className="col-sm-6 mt-2">
                                <label for="rc" className="form-label"> rc</label>
                                <input
                                    type="file"
                                    onChange={e => formik.setFieldValue("rc", e.target.files[0])}
                                    className={handleClasses(formik, "rc")}
                                    id="rc"
                                    placeholder="Confirm Your rc"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.rc}
                                </div>
                            </div>

                            <div className="col-sm-6 mt-2">
                                <input {...formik.getFieldProps("gender")}
                                    value="male"
                                    id='male'
                                    type="radio"
                                    className={` ms-2 form-check-input ${(formik.touched.gender && formik.errors.gender) && "is-invalid"}`} name="gender" />
                                <label htmlFor="male">male</label>

                                <input {...formik.getFieldProps("gender")}
                                    value="female"
                                    id='female'
                                    type="radio"
                                    className={` ms-2 form-check-input ${(formik.touched.gender && formik.errors.gender) && "is-invalid"}`} name="gender" />
                                <label htmlFor="female">female</label>
                                <span className='invalid-feedback'>{formik.errors.gender}</span>
                            </div>

                            <div className="col-sm-6 mt-2">
                                <label for="profile" className="form-label"> profile</label>
                                <select
                                    {...formik.getFieldProps("profile")} className={handleClasses(formik, "profile")}    >
                                    <option selected >Choose profile status</option>
                                    <option value="completed">completed</option>
                                    <option value="incompleted">incompleted</option>
                                </select>
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.profile}
                                </div>
                            </div>


                            <button type="submit" className="btn btn-primary w-100 mt-3">
                                signup
                            </button>

                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <div className="row">
                        <div className="col-sm-4">
                            <select className='form-select my-3' value={pagi.limit} onChange={e => setPagi({ limit: e.target.value, skip: 0 })}>
                                <option value="2">2</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                    </div>
                    {
                        data && <table class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>mobile</th>
                                    <th>address</th>
                                    <th>city</th>
                                    <th>dob</th>
                                    <th>gender</th>
                                    <th>licence</th>
                                    <th>rc</th>
                                    <th>profile</th>
                                    <th>action</th>
                                    <th>isActive</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.rider.map(item => <tr
                                        className={`${item.isActive ? "table-success" : "table-danger"}`}
                                        key={item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.address}</td>
                                        <td>{item.city}</td>
                                        <td>{format(item.dob, "yyyy-MM-dd")}</td>
                                        <td>{item.gender}</td>
                                        <td>
                                            <img src={item.licence} height={50} alt="" />
                                        </td>
                                        <td>
                                            <img src={item.rc} height={50} alt="" />
                                        </td>
                                        <td>{item.profile}</td>
                                        <td>
                                            <button onClick={e => setSelectedRider(item)} data-bs-toggle="modal" data-bs-target="#editRider" type="button" class="btn btn-sm btn-outline-warning">EDIT</button>
                                        </td>
                                        <td>
                                            <select
                                                onChange={e => updateAccount({ _id: item._id, isActive: e.target.value })}
                                                value={item.isActive} className='form-control'>
                                                <option value={true}>Active</option>
                                                <option value={false}>In Active</option>
                                            </select>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    }
                    {
                        data && [...Array(Math.ceil(data.total / pagi.limit))].map((item, index) => <button
                            type="button"
                            onClick={e => setPagi({ ...pagi, skip: index * pagi.limit })}
                            className={`btn btn-sm me-1 ${index * pagi.limit === pagi.skip ? "btn-primary" : "btn-outline-primary"}`}>
                            {index}
                        </button>)
                    }

                </div>
            </div>
        </form >

        <div class="modal fade" id="editRider">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Rider</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={RiderFormik.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6 mt-2">
                                    <label for="name" className="form-label"> name</label>
                                    <input
                                        {...RiderFormik.getFieldProps("name")}
                                        type="text"
                                        className="form-control my-2"
                                        id="name"
                                        placeholder="enter Your name"
                                    />
                                </div>

                                <div className="col-sm-6 mt-2">
                                    <label for="mobile" className="form-label"> mobile</label>
                                    <input
                                        {...RiderFormik.getFieldProps("mobile")}
                                        type="number"
                                        className="form-control my-2"
                                        id="mobile"
                                        placeholder="enter Your mobile"
                                    />
                                </div>

                                <div className="col-sm-6 mt-2">
                                    <label for="email" className="form-label"> email</label>
                                    <input
                                        {...RiderFormik.getFieldProps("email")}
                                        type="email"
                                        className="form-control my-2"
                                        id="email"
                                        placeholder="enter Your email"
                                    />
                                </div>


                                <div className="col-sm-6 mt-2">
                                    <label for="address" className="form-label"> address</label>
                                    <textarea
                                        {...RiderFormik.getFieldProps("address")}
                                        type="text"
                                        className="form-control my-2"
                                        id="address"
                                        placeholder="Enter Your address"
                                    />
                                </div>

                                <div className="col-sm-6 mt-2">
                                    <label for="city" className="form-label"> city</label>
                                    <input
                                        {...RiderFormik.getFieldProps("city")}
                                        type="text"
                                        className="form-control my-2"
                                        id="city"
                                        placeholder="Enter Your city"
                                    />
                                </div>

                                <div className="col-sm-6 mt-2">
                                    <label for="dob" className="form-label"> dob</label>
                                    <input
                                        {...RiderFormik.getFieldProps("dob")}
                                        type="date"
                                        className="form-control my-2"
                                        id="dob"
                                        placeholder="Enter Your dob"
                                    />
                                </div>

                                <div className="col-sm-6 mt-2">
                                    <input {...RiderFormik.getFieldProps("gender")}
                                        value="male"
                                        id='male'
                                        type="radio"
                                        className="ms-2 form-check-input" name="gender" />
                                    <label htmlFor="male">male</label>

                                    <input {...RiderFormik.getFieldProps("gender")}
                                        value="female"
                                        id='female'
                                        type="radio"
                                        className="ms-2 form-check-input" name="gender" />
                                    <label htmlFor="female">female</label>
                                </div>

                                <div className="col-sm-6 mt-2">
                                    <label for="profile" className="form-label"> profile</label>
                                    <select
                                        {...RiderFormik.getFieldProps("profile")} className='form-control my-2'    >
                                        <option selected >Choose profile status</option>
                                        <option value="completed">completed</option>
                                        <option value="incompleted">incompleted</option>
                                    </select>
                                </div>

                            </div>
                            <button type='submit' className='btn btn-sm w-100 btn-warning'>Update Rider</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Rider