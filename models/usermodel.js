const {Schema , model}= require('../connection')

const Userschema = new Schema({
    name:String,
    email:String,
    password: String,

})

const Usermodel = model("Usermodel", Userschema)
module.exports = Usermodel