var unirest = require("unirest");

exports.sendSMS = ({ number, message }) => new Promise((resolve, reject) => {


    var req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

    req.query({
        "authorization": process.env.SMS_API_KEY,
        "message": message,
        "language": "english",
        "route": "q",
        "numbers": number,
    });

    req.headers({
        "cache-control": "no-cache"
    });

    req.end(function (res) {
        if (res.error) {
            console.log(res.error)
            reject("unable to send sms")
        };
        console.log(res.body)
        resolve("sms send")
    });
})
