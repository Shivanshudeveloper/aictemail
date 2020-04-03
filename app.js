// Express
const express = require('express');
// Nodemailer
const nodemailer = require('nodemailer');

// Initializing app
const app = express();

app.use(express.json());



app.use('/:email/:msg', (req, res) => {
    const email = req.params.email;
    // Node Mailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aictecovidhelp@gmail.com',
            pass: 'Ironman1.'
        }
    });

    let mailOption = {
        from: 'shivanshu981@gmail.com',
        to: email,
        subject: 'Testing and Testing',
        text: msg
    };

    transporter.sendMail(mailOption, (err, data) => {
        if (err) throw res.send(err);

        console.log('Email Sent!');
        res.send('Done');
    })
});

// Getting PORT set
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, console.log('Server Started On Port', PORT));