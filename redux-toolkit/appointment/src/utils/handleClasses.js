import clsx from "clsx";

export const handleClasses = (arg, formik) => clsx({
    "form-control my-2": true,
    "is-invalid": formik.touched[arg] && formik.errors[arg],
    "is-valid": formik.touched[arg] && !formik.errors[arg]
})