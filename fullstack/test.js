validate({
    password: {
        value: req.body.password,
        required: true,
        strong: true,
        min: 5,
        max: 15,
    },
})