const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const Auth=async(req,resp,next)=>{
    try{
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        const Token=req.headers.authorization.split(" ")[1]
        if(!Token){
            return resp.json({
                success:false,
                messsage:"token not found"
            })
        }
        const decoded=jwt.verify(Token,process.env.JWT_SEC)
        req.user=decoded
        return next()
    }else{
         return resp.json({
                success:false,
                messsage:"error"
            })
    }
    }
    catch(err){
        return resp.json({
                success:false,
                message:err.messsage
            })
    }
}
module.exports=Auth