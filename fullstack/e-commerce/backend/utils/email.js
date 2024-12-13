const nodemailer = require("nodemailer")

exports.sendEmail = ({ to, subject, message }) => new Promise((resolve, reject) => {
    try {
        const mailer = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.EMAIL_PASS
            }
        })

        mailer.sendMail({ to, subject, html: message }, err => {
            if (err) {
                console.log(err)
                reject("nodemailer error")
            } else {
                console.log("email send success")
                resolve("email send success")
            }

        })

    } catch (error) {
        console.log(error)
        reject("unknown error occured, unable to send email")
    }

})