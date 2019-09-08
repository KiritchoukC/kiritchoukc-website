import express from 'express'
import nodemailer from 'nodemailer'
import validator from 'validator'
import xssFilters from 'xss-filters'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())

/// Send the request to the target mail
app.post('/', (req, res) => {
  const attributes = ['subject', 'email', 'message'] // Our three form fields, all required

  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  const sanitizedAttributes = attributes.map((n) =>
    validateAndSanitize(n, req.body[n])
  )

  // True if some of the attributes new values are false -> validation failed
  const someInvalid = sanitizedAttributes.some((r) => !r)

  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ error: 'The request cannot be processed' })
  }

  sendMail(...sanitizedAttributes)
  res.status(200).json({ message: 'Mail successfully sent!' })
})

const rejectFunctions = new Map([
  ['subject', (v) => v.length < 3],
  ['email', (v) => !validator.isEmail(v)],
  ['message', (v) => v.length < 10]
])

const validateAndSanitize = (key, value) => {
  // If map has key and function returns false, return sanitized input. Else, return false
  return (
    rejectFunctions.has(key) &&
    !rejectFunctions.get(key)(value) &&
    xssFilters.inHTMLData(value)
  )
}

async function sendMail(subject, from, text) {
  // eslint-disable-next-line no-console
  console.log({
    mailTo: process.env.MAIL_TO,
    user: process.env.GMAIL_USER,
    password: process.env.GMAIL_PASSWORD
  })
  const to = process.env.MAIL_TO

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    }
  })

  const mail = `<h3>Mail from ${from}:</h3> <p>${text}</p>`

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from,
    to,
    subject,
    html: mail
  })

  // eslint-disable-next-line no-console
  console.info('Message sent: %s', info.messageId)
}

export default {
  path: '/api/contact',
  handler: app,
  prefix: false
}
