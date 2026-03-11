import User from "../models/userModel.js"
import OTP from "../models/otpModel.js"
import bcrypt from "bcryptjs"
import { NextFunction, Request, Response } from "express"


// REGISTER USER (OTP VERIFY)
export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {

  try {

    const { email, password, otp } = req.body

    const otpData = await OTP.findOne({ email, otp })

    if (!otpData) {
      res.status(400).json({
        message: "Invalid OTP"
      })
      return
    }

    if (otpData.expiresAt < new Date()) {
      res.status(400).json({
        message: "OTP expired"
      })
      return
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      email,
      password: hashedPassword
    })

    await OTP.deleteMany({ email })

    res.status(201).json({
      message: "User registered successfully",
      user
    })

  } catch (err: any) {

    res.status(500).json({
      error: err.message
    })

  }
}


// LOGIN USER
export const loginUser = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      res.status(400).json({
        message: "User not found"
      })
      return
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      res.status(400).json({
        message: "Invalid password"
      })
      return
    }

    res.status(200).json({
      message: "Login successful",
      user
    })

  } catch (err: any) {

    res.status(500).json({
      error: err.message
    })

  }

}


// LOGOUT USER
export const logoutUser = async (
  req: Request,
  res: Response
): Promise<void> => {

  res.status(200).json({
    message: "Logout successful"
  })

}