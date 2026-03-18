import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import { generateAccessToken,generateRefreshToken } from "$/services/token.service.js"


export const loginUser = async (req,res)=>{
    const {email,password}=req.body

    const user = await UserInfo.findOne({email}).select("+password")
    if (!user){
        return res.status(401).json({
            message:"Usee not found"
        })
    }
    const match = await bcrypt.compare(password,user.password)

    if(!match){
        return res.status(401).json({
            message:"Invalid password"
        })

    }
    const accessToken = generateAccessToken(user._id.toString())
    const refreshtoken= generateRefreshToken(user._id.toString())

    res.cookies("accessToken",accessToken,{
        httpOnly:true,
        secure:false
    })
    res.cookie("refreshToken",refreshtoken,{
        httpOnly:true,
        secure:false
    })
    res.json({
        message:"Login successful",
        user
    })
}