require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const connectdb = require('./config/db')
const router = require('./routes/user.routes')
const InterviewRouter=require('../Backend/routes/Interviewroutes')
const app=express()
app.use(express.json())



connectdb()



app.use("/api/v1/auth",router)
app.use("/api/v1/pro",InterviewRouter)


app.listen(9000)





app.listen(process.env.PORT)