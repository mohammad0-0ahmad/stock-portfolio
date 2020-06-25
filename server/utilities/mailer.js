const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'stock.portfolio.molndal@gmail.com',
        pass: 'Stockportfolio2020'
    }
});

const mailOptions = {
    from: 'stock.portfolio.molndal@gmail.com',
    to: '',
    subject: '',
}

exports.sendResetPasswordEmail = (email, link) => {
    mailOptions.to = email;
    mailOptions.subject = 'Återställa lösenord';

    mailOptions.html = `
    <div style="padding:5vw; background:#3c3c3b; color:#f6fafb; border:3px solid #ffd98d; text-align:center; border-radius:1vw;">
    <img src='https://i.ibb.co/Y7Qv9GF/stock-logo.png' alt='Logo'>
    <h5>Stock portfolio</h5>
    <h1>Återställ lösenord</h1>
    <h3>Oroa dig inte. Klicka bara på knappen under för att återställa ditt lösenord.</h3>
    <h5>Ignorera detta mejl ifall du inte önskade att återställa ditt lösenord.</h5>
    <a href='${link}' style='
    display: block;
    background: #ffd98d;
    text-decoration: none;
    border-radius: 1vw;
    width: fit-content;
    padding: 1vw;
    color: #3c3c3b;
    margin: auto;'>Återställ lösenord nu</a>
    </div>
    `;

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(`Email sent to: ${email}\n${info.response}`);
        }
    });
}