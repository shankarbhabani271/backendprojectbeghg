import envConfig from "$/config/env.config.js"
import jwt from "jsonwebtoken"

export const authMiddleware = (req,res,next)=>{

const token = req.cookies.token

if(!token){
return res.status(401).json({
message:"Unauthorized"
})
}

try{

const decoded = jwt.verify(token,envConfig.JWT_SECRET)

req.user = decoded

next()

}catch(error){

res.status(401).json({
message:"Invalid token"
})

}

}