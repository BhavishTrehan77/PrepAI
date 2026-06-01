
const User = require("../models/user.models")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const Signup=async(req,resp)=>{
    const data=await User.create(req.body)
    resp.json(data)
}
const Login=async(req,resp)=>{
    const{name,email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        return resp.json({
            success:false,
            message:"user not found"
        })
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        return resp.json({
            success:false,
            message:"password didnt match"
        })
    }
    const Token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SEC,{expiresIn:'2d'})
    if(!Token){
        return resp.json({
            success:false,
            message:"token not fdound"
        })
    }
    resp.json({
        user,Token
    })

}
module.exports={
    Signup,
    Login
}