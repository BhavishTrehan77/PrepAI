const { default: mongoose } = require("mongoose");



async function connectdb(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to databse successfully")
}


module.exports=connectdb

