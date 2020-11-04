// Express
const express = require('express');
// Nodemailer
const nodemailer = require('nodemailer');
const router = express.Router();
const cors = require('cors');

// Initializing app
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("S");
});

app.post('/himaliyaregisterstudent/:id/:email/:fullname', (req, res) => {
    const id = req.params.id;
    const email = req.params.email;
    const fullname = req.params.fullname;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fileadventure2020@gmail.com',
            pass: 'Daksh@1234'
        }
    });
    let mailOption = {
        from: 'fileadventure2020@gmail.com',
        to: email,
        subject: `Himalayiya University Support Team`,
        text: `
            Dear Sir/Mam ${fullname}

            Thanks for applying to Himalayiya University your reference id is ${id}. We are facing a huge response accross wide, our support team will contact you within 48 hours.

            Regards,
            Himalayiya University
        `
    };
    transporter.sendMail(mailOption, (err, data) => {
        if (err) throw res.send(err);
        console.log('Email Sent!');
        res.send("Done");
    })

});



// Getting PORT set
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, console.log('Server Started On Port', PORT));
