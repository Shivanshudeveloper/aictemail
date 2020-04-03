// Express
const express = require('express');
// Nodemailer
const nodemailer = require('nodemailer');

// Initializing app
const app = express();

app.use(express.json());



app.use('/', (req, res) => {
    // Node Mailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shivanshu981@gmail.com',
            pass: 'ironman1234'
        }
    });

    let mailOption = {
        from: 'shivanshu981@gmail.com',
        to: 'akhilnegigeu@gmail.com',
        subject: 'Testing and Testing',
        text: 'IT works'
    };

    transporter.sendMail(mailOption, (err, data) => {
        if (err) throw err;

        console.log('Email Sent!');
    })
});

// Getting PORT set
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, console.log('Server Started On Port', PORT));