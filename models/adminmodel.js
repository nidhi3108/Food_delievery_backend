const {Schema , model}= require('../connection')

const Adminschema = new Schema({
    name:String,
    email:String,
    password: String,

})

const Adminmodel = model("Adminmodel", Adminschema)
module.exports = Adminmodel