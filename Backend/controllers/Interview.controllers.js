const Interview = require("../models/InterviewModel")


const questionBank = {

    MERN:[
        "Explain Virtual DOM in React.",
        "What is JWT Authentication?",
        "Difference between SQL and MongoDB?",
        "What is Middleware in Express?",
        "Explain React Lifecycle."
    ],

    DSA:[
        "What is Binary Search?",
        "Explain Time Complexity.",
        "What is Sliding Window?",
        "Difference between Stack and Queue?",
        "Explain Recursion."
    ],

    NODE:[
        "What is Event Loop?",
        "What is Non-blocking I/O?",
        "Difference between require and import?"
    ]
}

const getQuestions=async(req,resp)=>{
    try{
        const category=req.params.category
        const question=questionBank[category]
        if(!question){
             return resp.status(404).json({
                success:false,
                message:"Category not found"
            })
        }
        resp.json({
            success:true,
            question
        })
    }catch(err){
        return resp.json({
            success:false,
            message:err.message
        })
    }
}
const saveAnswer=async(req,resp)=>{
    const{Category,question,answer}=req.body
    const interview=await Interview.create({
        userId:req.user.id,
        Category,
        question,
        answer
    })
    resp.status(201).json({
        success:true,
        interview
    })

}

const getProgress=async(req,resp)=>{
    const data=await Interview.find({
        userId:req.user.id,
    })
    resp.status(200).json({
        success:true,
        totalAnswers:data.length,
        data
    })
}
module.exports={
    getQuestions,saveAnswer,getProgress
}
