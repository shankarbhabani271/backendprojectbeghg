import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendOtpEmail = async (email: string, otp: number) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NODE_MAILER_EMAIL,
      to: email,
      subject: "Employee Verification OTP",
      text: `Your OTP is: ${otp}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("OTP Email Sent Successfully");
    console.log(info.response);

  } catch (error) {
    console.log("Email Error:", error);
  }
};

export default sendOtpEmail;