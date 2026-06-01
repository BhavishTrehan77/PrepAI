const Rbac=async(req,resp,next)=>{
    if(req.user.role=='admin'){
        return next()
    }else{
         return resp.json({
                        success:false,
                        messsage:"err"
                    })
    }
}
module.exports=Rbac