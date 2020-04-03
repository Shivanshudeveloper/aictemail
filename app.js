// Express
const express = require('express');
// Nodemailer
const nodemailer = require('nodemailer');

// Initializing app
const app = express();

app.use(express.json());



app.use('/:email/:msg/:name/:toEmail/:phone/:location', (req, res) => {
    const email = req.params.email;
    const msg = req.params.msg;

    const name = req.params.msg;
    const toEmail = req.params.toEmail;
    const phone = req.params.phone;
    const location = req.params.location;






    const output = `
                                    <h1>Covoid 19 Help AICTE</h1>
                                    <h3>Please Provide the Help For:</h3>
                                    <ul>
                                        <li>Name: ${name}</li>
                                        <li>Email: ${toEmail}</li>
                                        <li>Phone: ${phone}</li>
                                        <li>Message: ${msg}</li>
                                        <li>Near Location: ${location}</li>
                                    </ul>
                                `;


    // Node Mailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aictecovidhelp@gmail.com',
            pass: 'Ironman1.'
        }
    });

    let mailOption = {
        from: 'aictecovidhelp@gmail.com',
        to: email,
        subject: 'Testing and Testing',
        text: output
    };

    transporter.sendMail(mailOption, (err, data) => {
        if (err) throw res.send(err);

        console.log('Email Sent!');
        res.redirect('https://helpline.aicte-india.org/helpme.php');
    })
});

// Getting PORT set
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, console.log('Server Started On Port', PORT));