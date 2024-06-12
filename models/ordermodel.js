const {Schema , model}= require('../connection')

const orderschema = new Schema({
    customername: String,
    deliverytime: String,
    items : [{String}]

})

const ordermodel = model("ordermodel", orderschema)
module.exports = ordermodel

const {Schema , model}= require('../connection')

const Staffschema = new Schema({
    name:String,
        day: String,
        starttime: String,
        endtime: String

})

const Staffmodel = model("Staffmodel", Staffschema)
module.exports = Staffmodel