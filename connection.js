const dotenv = require('./index')
 const mongoose = require ('mongoose')

 const DB = process.env.DATABASEE

 mongoose.connect(DB)
 .then ((res)=>{
    console.log("server connected")
 })
 .catch((err)=>{
    console.log(err);
    console.log("err in databse connection")
 })

 module.exports = mongoose