const mongoose = require("mongoose");
const userSchema=require('../models/user.model.schema');

const User=new mongoose.model('User',userSchema);


exports.createData=(async(req,res)=>{
    const newUser=new User(req.body);
    await newUser.save((err)=>{
        if(err){
            res.status(500).json({
                error:"there was a server side error"
            })
        }
        else{
            res.status(200).json({
                messsage:"User was insert successfully",
            })
        }
    });
});
 

exports.createManyData=(async(req,res)=>{
    await User.insertMany(req.body,(err)=>{
        if(err){
            res.status(500).json({
                error:"there was a server side error"
            })
        }
        else{
            res.status(200).json({
                messsage:"User was insert successfully",
            })
        }
    })
});


exports.readOneData=(async(req,res)=>{
    try {
        await User.findOne({status:'active'},(err,data)=>{
            if(err){
                res.status(500).json({
                    error:"there was a server side error",
                })
            }
            else{
                res.status(200).json({
                    result:data,
                    messsage:"user data find successfully",
                })
            }
        });
        
    } catch (error) {
        console.log(error);
    }
})


exports.updateData=(async(req,res)=>{
    try {
        await User.updateOne(
            {_id:req.params.id},
            {
            $set:{
                status:"active",
            }
        },{useFindAndModify:false},(err)=>{
            if(err){
                res.status(500).json({
                    error:"there was a server side error"
                })
            }
            else{
                res.status(200).json({
                    messsage:"User was update successfully",
                })
            }
        })
        
    } catch (error) {
        console.log(error);
    }
});

