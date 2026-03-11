import { Request, Response, NextFunction } from "express"
import OTP from "../models/otpModel.js"
import { sendOTP } from "../utils/sendEmail.js"
import transporter from "$/config/email.config.js"
import envConfig from "$/config/env.config.js"

export const sendOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {

  try {



    console.log("object","+++++++++")

    const { email } = req.body

    const otp = Math.floor(100000 + Math.random() * 900000).toString()

    await OTP.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000)
    })
    
    
      transporter.sendMail({
      from: envConfig.NODE_MAILER_EMAIL,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
    });

    // await sendOTP(email, otp)

    res.success({
      message: "OTP sent successfully",
      data:{otp}
    })

  } catch (err) {
next(err)

  }

}