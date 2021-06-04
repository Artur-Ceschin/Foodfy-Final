const nodemailer = require('nodemailer')


module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c0729a3fe61c85",
    pass: "18282f5549f431"
  }
});
