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

app.get('/:email/:msg/:phone/:location/:fullName/:emailOfPerson/:type/:near', (req, res) => {
    const email = req.params.email;
    var msg = req.params.msg;
    var phone = req.params.phone;
    var location = req.params.location;
    var fullName = req.params.fullName;
    var emailOfPerson = req.params.emailOfPerson;
    var type = req.params.type;
    var near = req.params.near;

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
        subject: `MHRD AICTE Helpline- Help Requiried for ${fullName} at ${location}`,
        text: `Full Name: ${fullName}, Type: ${type},Message: ${msg}, Phone Number: ${phone}, Email: ${emailOfPerson}, Near Locality: ${near}`
    };

    transporter.sendMail(mailOption, (err, data) => {
        if (err) throw res.send(err);

        console.log('Email Sent!');
        res.redirect('https://helpline.aicte-india.org/helpme.php');
    })
});


app.get('/aicte/:email', (req, res) => {
    const email = req.params.email;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aicteupdate@gmail.com',
            pass: 'aicte@1234'
        }
    });
    let mailOption = {
        from: 'aicteupdate@gmail.com',
        to: email,
        subject: `Your Account Has Been Successfully Created`,
        text: `Account for ${email} has been successfully created.`
    };
    transporter.sendMail(mailOption, (err, data) => {
        if (err) throw res.send(err);
        console.log('Email Sent!');
        res.redirect('http://free.aicte-india.org/AICTE/login.php?register=success');
    })
});



// Getting PORT set
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, console.log('Server Started On Port', PORT));