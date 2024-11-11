const nodemailer = require("nodemailer");

module.exports = {
  async afterUpdate(event) {
    const { result } = event;

    // Configure the transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password",  // Replace with your app password
      },
    });

    // Define the email options
    const mailOptions = {
      from: "your-email@gmail.com",
      to: "your-email@gmail.com", // Email to notify
      subject: `Post Updated: ${result.title}`,
      text: `The post titled "${result.title}" has been updated.`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email notification sent successfully.");
    } catch (error) {
      console.error("Error sending email notification:", error);
    }
  },
};
