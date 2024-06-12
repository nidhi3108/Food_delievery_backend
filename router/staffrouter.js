const express = require('express')
const staffmodel = require("../models/staffmodel")
const router = express.Router();


router.post('/addstaff', async(req,res)=>{
    console.log("staff reqbody", req.body);

    new staffmodel(req.body).save()
    .then((result)=>{
        console.log("staff data save");
        console.log(result);
        res.json(result)
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})

router.get('/showallstaff', async(req,res)=>{
    console.log("all staff reqbody", req.body);

    staffmodel.find().populate('name')
    .then((result)=>{
        console.log("staff data get");
        console.log(result);
        res.json(result)
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})


router.post('/deletestaff', (req,res)=>{
    console.log(req.body);
    console.log("req.body if",req.body.id);
    staffmodel.findByIdAndDelete({_id: req.body.id})
    .then((result)=>{
        console.log("staff deleted");
        console.log(result);
        res.json(result)
    })
    .catch((err)=>{
        console.log("staff del ni hua");
        console.log(err);
        res.json(err)
    })
})


router.post('/updatestaff', (req,res)=>{
    console.log(req.body);
    console.log("req.body if",req.body.id);
    staffmodel.findOneAndUpdate({_id: req.body.id},{name:req.body.name, day:req.body.day, starttime:req.body.starttime, endtime:req.body.endtime})
    .then((result)=>{
        console.log("staff deleted");
        console.log(result);
        res.json(result)
    })
    .catch((err)=>{
        console.log("staff del ni hua");
        console.log(err);
        res.json(err)
    })
})

module.exports = router