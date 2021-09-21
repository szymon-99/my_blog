import type { NextApiRequest, NextApiResponse } from 'next'
require('dotenv').config()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(404).json({
      msg: 'Only post request allowed',
    })
  }

  const { name, title, message } = req.body
  if (!name && !title && !message) {
    return res.status(404).send('error')
  }

  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'szymonprusak.spam@gmail.com',
      pass: process.env.PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    from: 'szymonprusak.spam@gmail.com',
    to: 'szymonprusak.code@gmail.com',
    subject: `Message from ${name}, ${title}`,
    text: message + ' | Sent from: ' + name,
    html: `<div>
    <h2>${title}</h2>
    <p>${message}</p> <br/>
    <p>sent from: <strong>${name}</strong></p>
    </div>`,
  }

  try {
    await transporter.sendMail(mailData)

    res.status(200).send('success')
  } catch (error) {
    console.log(error)
    res.status(404).send('error')
  }
}
