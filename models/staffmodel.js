const {Schema , model}= require('../connection')

const Staffschema = new Schema({
    name:String,
        day: String,
        starttime: String,
        endtime: String

})

const Staffmodel = model("Staffmodel", Staffschema)
module.exports = Staffmodel