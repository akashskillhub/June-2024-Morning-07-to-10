const useFormik = arg => {
    return {
        handleSubmit: arg.onSubmit
    }
}


const x = useFormik({
    initialValue: {},
    validationSchema: [],
    onSubmit: () => { }
})

console.log(x.handleSubmit)
