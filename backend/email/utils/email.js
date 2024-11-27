const nodeMailer = require("nodemailer")
const sendEmail = ({ email, subject, message }) => new Promise((resolve, reject) => {

    const mailer = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.FROM_EMAIL,
            pass: process.env.EMAIL_PASS
        }
    })

    mailer.sendMail({
        to: email,
        subject: subject,
        text: message
    }, err => {
        if (err) {
            console.log(err)
            console.log("unable to send email")
            reject("unable to send email")
        } else {
            console.log("email send success")
            resolve("email send success")
        }
    })

})

module.exports = sendEmail