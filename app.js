// Express
const express = require('express');
// Nodemailer
const nodemailer = require('nodemailer');
const router = express.Router();

// Initializing app
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("S");
});

app.get('/:email/:msg/:phone/:location', (req, res) => {
    const email = req.params.email;
    var msg = req.params.msg;
    var phone = req.params.phone;
    var location = req.params.location;

    // const name = req.params.msg;
    // const toEmail = req.params.toEmail;
    // const phone = req.params.phone;
    // const location = req.params.location;

    // const output = `
    //             Covoid 19 Help
    //                 Please Provide the Help For:
    //                     Name: ${name}
    //                     Email: ${toEmail}
    //                     Phone: ${phone}
    //                     Message: ${msg}
    //                     Near Location: ${location}`;


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
        subject: `MHRD AICTE Helpline- Help Requiried for ${email} at ${location}`,
        text: `${msg}, Phone Number: ${phone}`
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