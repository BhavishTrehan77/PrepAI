const mongoose=require('mongoose')




const InterviewSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    Category:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
})

const Interview=mongoose.model('Interview',InterviewSchema)
module.exports=Interview