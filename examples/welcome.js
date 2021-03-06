var Mailgen = require('../');

// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        // Appears in header & footer of e-mails
        name: 'Mailgen',
        link: 'https://mailgen.js/'
        // Optional logo
        // logo: 'https://mailgen.js/img/logo.png'
    }
});

// Prepare email contents
var email = {
    body: {
        name: 'John Appleseed',
        intro: 'Welcome to Mailgen! We’re very excited to have you on board.',
        action: {
            instructions: 'To get started with Mailgen, please click here:',
            button: {
                color: 'green',
                text: 'Confirm your account',
                link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
};

// Generate an HTML email using mailgen
var emailBody = mailGenerator.generate(email);

// Optionally, preview the generated e-mail by writing it to a local file
require('fs').writeFileSync('preview.html', emailBody, 'utf8');

// `emailBody` now contains the HTML body.
// It's up to you to send the e-mail. 
// Check out nodemailer to accomplish this: 
// https://nodemailer.com/

// Send the e-mail with your favorite mailer
// transporter.sendMail({
//     from: 'no-reply@mailgen.js',
//     to: 'target@email.com',
//     subject: 'Mailgen',
//     html: emailBody
// }, function (err) {
//     if (err) return console.log(err);
//     console.log('Message sent successfully.');
// });