const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const Schemadata=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:["user","admin"]
    }
})
Schemadata.pre("save",async function(){
    const hashedPassword=await bcrypt.hash(this.password,10)
    this.password=hashedPassword
})


const User=mongoose.model('User',Schemadata)
module.exports=User
