// Express
const express = require('express');
// Nodemailer
const nodemailer = require('nodemailer');

// Initializing app
const app = express();

app.use(express.json());



app.use('/', (req, res) => {
    const output = `
                <h1>Graphic Era Deemed to be University Goods Request</h1>
                <h3>Details:</h3>
                
                <a href="https://management-cloud-geu.azurewebsites.net/">Submit Your Quataion</a>
                <p>
                    Regards,
                    'sds'
                    Mob: '32323'
                </p>
                h3>In case of any query please contact to the Adminstration</h3>
    `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'akhilnegigeu@gmail.com',
            pass: 'work@1234'
        }    
    });
    // send mail with defined transport object
    let info = transporter.sendMail({
        from: 'akhilnegigeu@gmail.com', // sender address
        to: 'shivanshu981@gmail.com', // list of receivers
        subject: `Quatation Required for`, // Subject line
        text: "Goods Request", // plain text body
        html: output // html body
    }).then(() => {
        res.send(`SEND`);
    })
    .catch(err => res.send(err));
});

// Getting PORT set
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, console.log('Server Started On Port', PORT));