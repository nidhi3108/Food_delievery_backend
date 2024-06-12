const express = require('express')
const model = require("../models/adminmodel")
const router = express.Router();


router.post('/register', async(req,res)=>{
    console.log("admin reqbody", req.body);
    const email= req.body.email;

    const exitsadmin= await model.findOne({email})

    if(exitsadmin){
        return res.status(400).json({error:"email already exist"})
    }

    new model(req.body).save()
    .then((result)=>{
        console.log("admin register data save");
        console.log(result);
        res.json(result)
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})


router.post('/login', async(req,res)=>{
    console.log("admin reqbody", req.body);
    const loginData =  req.body

    model.findOne({email: loginData.email,password:loginData.password})

    .then((result)=>{
        if(result){
            res.status(200).json(result);
            console.log("admin login data match");
        }
        else{
            res.status(401).json(result);
            console.log("admin login data not match");
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    })
})


module.exports = router