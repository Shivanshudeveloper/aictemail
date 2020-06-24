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


app.get('/iks/:email', (req, res) => {
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
        subject: `Your Form Has Been Successfully Submitted`,
        text: `You have successfully submitted the form for Indian Traditional Knowledge System`
    };
    transporter.sendMail(mailOption, (err, data) => {
        if (err) throw res.send(err);
        console.log('Email Sent!');
        res.redirect('http://free.aicte-india.org/its/home.php?submit=success');
    })
});


app.get('/mobileiks/:email', (req, res) => {
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
        subject: `Your Form Has Been Successfully Submitted`,
        text: `You have successfully submitted the form for Indian Traditional Knowledge System`
    };
    transporter.sendMail(mailOption, (err, data) => {
        if (err) throw res.send(err);
        console.log('Email Sent!');
        res.redirect('http://free.aicte-india.org/its/mobile.php?submit=success');
    })
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


app.get('/translation/:email/:course/:language', (req, res) => {
    const email = req.params.email;

    const course = req.params.course;
    const language = req.params.language;
    res.redirect(`http://translation.aicte-india.org/FAQ.php?register=success&course=${course}&language=${language}&email=${email}`);
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'translationaicte@gmail.com',
    //         pass: 'Ironman1.'
    //     }
    // });
    // let mailOption = {
    //     from: 'aicteupdate@gmail.com',
    //     to: email,
    //     subject: `Congratulations Account Has Been Successfully Created`,
    //     html: `Account for ${email} has been successfully Registered. 
    //     <br />
    //     Willingness from ${email} for the course ${course} for translating in ${language} language has been successfully registered.
    //     More information can be seen in the <a href="http://translation.aicte-india.org/FAQ.php">FAQs</a>. Click here to see more information
    //     `
    // };
    // transporter.sendMail(mailOption, (err, data) => {
    //     if (err) throw res.send(err);
    //     console.log('Email Sent!');
    //     res.redirect(`http://translation.aicte-india.org/FAQ.php?register=success&course=${course}&language=${language}&email=${email}`);
    // })
});


app.get('/mtranslation/:email/:course/:language', (req, res) => {
    const email = req.params.email;

    const course = req.params.course;
    const language = req.params.language;
    res.redirect(`http://translation.aicte-india.org/FAQ.php?register=success&course=${course}&language=${language}&email=${email}`);
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'translationaicte@gmail.com',
    //         pass: 'Ironman1'
    //     }
    // });
    // let mailOption = {
    //     from: 'aicteupdate@gmail.com',
    //     to: email,
    //     subject: `Congratulations Account Has Been Successfully Created`,
    //     html: `Account for ${email} has been successfully Registered. 
    //     <br />
    //     Willingness from ${email} for the course ${course} for translating in ${language} language has been successfully registered.
    //     More information can be seen in the <a href="http://translation.aicte-india.org/FAQ.php">FAQs</a>. Click here to see more information
    //     `
    // };
    // transporter.sendMail(mailOption, (err, data) => {
    //     if (err) throw res.send(err);
    //     console.log('Email Sent!');
    //     res.redirect(`http://translation.aicte-india.org/FAQ.php?register=success&course=${course}&language=${language}&email=${email}`);
    // })
});


app.get('/iksexpert/:email/:fullname', (req, res) => {
    const email = req.params.email;
    const fullname = req.params.fullname;
    console.log(fullname);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'iksaicte@gmail.com',
            pass: 'aicte1234'
        }
    });
    let mailOption = {
        from: 'iksaicte@gmail.com',
        to: email,
        subject: `Indian Knowladge System`,
        text: `
            Dear Shri/Smt. ${fullname}

            Honorable Minister for Human Resource Development (MHRD) Shri Ramesh Pokhryal "Nishank" had initiated a brainstorming session of experts in the domain of Indian Traditional Knowledge Systems on 18th March 2020. The meeting was Chaired by the HRM and went on for nearly 6 hours.
            There are some who could not be contacted or could not attend the meeting due to pre occupation. This mail is for informing all of you about the meeting and future course of action.
            An "Indian Knowledge Systems" Division is created in MHRD which shall be operated from AICTE office in Vasant Kunj.
            A portal has been created, where you can upload the research work you have already undertaken in the Indian Knowledge Systems, present ongoing work, your commitment to future course of action, especially further research work that you would be interested in undertaking in IKS, helping in providing literature for creating knowledge database in IKS for books, further research, willingness to be part of some IKS knowledge groups so as to start the work in IKS domains in right earnest.
            Your name was suggested by some experts stating that you too are interested in this domain. Hence, we request you to give information not only about you and also give a list of other experts working in the IKS domains about whom you know so that our database of experts can be expanded which will be useful in moving ahead.
            IKS website live url :  http://iks.aicte-india.org/
            In order to promote interdisciplinary research on all aspects of Indian Knowledge Systems, preserve, and disseminate Indian Knowledge Systems for further research and societal applications, a database of individuals and organizations (both public and private) who have contributed by way of Research, Teaching, Publication and Preservation of ancient and contemporary rich Indian Knowledge Systems ranging from art, music, dance, drama, mathematics, astronomy, science, technology, life sciences, environment and natural sciences, health care, yoga, law, jurisprudence, economics, social sciences, psychology, philosophy, management, linguistics, oral traditions of India, panchanga, jyotish shastra, knowledge hidden in Sanskrit, Prakrit, Tamil, Pali etc is necessary. Further, all such collated information needs to be scrutinized, verified, and put in context through interdisciplinary scientific investigation; create a portal for archival and dissemination of this rich knowledge. Hence, we appeal to you to share your interests on this portal for further processing and meet the above objectives.
            Once, various committees are set up, we will start regular online meetings and discuss issues related to IKS.
            The Honourable Minister, HRD will also hold review meetings at regular intervals to promote, support and inspire all of us. 
            AICTE has already sanctioned a project to IIM Bangalore coordinated by Prof. Mahadevan for writing an authentic book on Indian Knowledge System.
            Together, we can make India proud of its rich cultural and scientific heritage and knowledge and continue further research work in various domains and bring out applications for the benefit of the society.

            Regards,
            Anil Sahasrabudhe
            Chairman AICTE
        `
    };
    transporter.sendMail(mailOption, (err, data) => {
        if (err) throw res.send(err);
        console.log('Email Sent!');
        res.send("D");
    })
});



// Getting PORT set
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, console.log('Server Started On Port', PORT));
