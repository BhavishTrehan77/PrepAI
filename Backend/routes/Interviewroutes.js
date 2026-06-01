const express=require('express')
const Auth = require('../Middlewares/Auth')
const Rbac = require('../Middlewares/Rbac')
const { saveAnswer, getQuestions, getProgress } = require('../controllers/Interview.controllers')

const router=express.Router()



router.post("/save",Auth,saveAnswer)

router.get("/question/:category",Auth,getQuestions)

router.get("/progress",Auth,getProgress)


module.exports=router