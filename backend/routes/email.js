const express = require('express');
const router = express.Router();
const db = require('../db');
const nodemailer = require('nodemailer');

// POST endpoint
router.post('/', (req, res) => {
  const { name, email } = req.body;

  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err) => {
    if (err) return res.status(500).send(err);

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '29ed892e0b9717',
        pass: 'e0ec454833077a'
      }
    });

    const mailOptions = {
      from: '"Test App" <no-reply@test.com>',
      to: email,
      subject: 'Confirmation Email',
      text: `Hello ${name}, this is your confirmation. Your email is ${email}`
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) return res.status(500).send(error);
      res.status(200).send({ message: 'Email sent & saved!' });
    });
  });
});

module.exports = router;
