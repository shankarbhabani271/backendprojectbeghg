import nodemailer from "nodemailer";

const sendInviteEmail = async (
  email: string,
  link: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.NODE_MAILER_EMAIL,
      to: email,
      subject: "Employee Registration Link",
      html: `
        <h2>Complete Registration</h2>
        <p>Click below link:</p>
        <a href="${link}">${link}</a>
      `
    });

    console.log("Email sent successfully");

  } catch (error) {
    console.log(error);
  }
};

export default sendInviteEmail;