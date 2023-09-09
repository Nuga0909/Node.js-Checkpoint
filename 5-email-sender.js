const nodemailer = require('nodemailer');

const sendEmail = async () => {
  // Create a transporter using your email service information
  let transporter = nodemailer.createTransport({
    service: 'gmail',  // For example, using Gmail. For other services, refer to nodemailer's documentation
    auth: {
      user: 'youremail@gmail.com',  // Your email address
      pass: 'yourpassword'  // Your email password (consider using OAuth2 for security reasons)
    }
  });

  // Set up email data with unicode symbols
  let mailOptions = {
    from: 'youremail@gmail.com',  // Sender address
    to: 'youremail@gmail.com',    // List of receivers
    subject: 'Hello from Node.js',  // Subject line
    text: 'Hello world',  // Plain text body
    html: '<b>Hello world</b>' // Html body
  };

  // Send the email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(`Message sent: ${info.response}`);
  } catch (error) {
    console.error(`Error occurred: ${error.message}`);
  }
};

sendEmail();
