const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jiayingchen3111997@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome, ${name}`,
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jiayingchen3111997@gmail.com',
    subject: 'Sorry for not meeting your request',
    text: `We're sad to see you leave ${name}. Is there anything we can do?`,
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}