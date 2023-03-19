const express = require("express");
const router=express.Router();

const mongoose = require("mongoose");

const userSchema=require('../models/user.model.schema');
const User=new mongoose.model('User',userSchema);


// post a user
router.post("/",async(req,res)=>{
    try {
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
    } catch (error) {
        console.log(error);
    }
});


// post multi user
router.post("/all",async(req,res)=>{
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


// get all the user
router.get("/",async(req,res)=>{
    try {
        await User.find({status:'inactive'})
        .limit(2)
        .select({
            _id:0,
            __v:0,
        })
        .exec((err,data)=>{
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
        })
        
    } catch (error) {
        console.log(error);
    }
});


// get a user by id
router.get("/:id",async(req,res)=>{
    try {
        await User.find({_id:req.params.id},(err,data)=>{
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
        })        
    } catch (error) {
        console.log();
    }
});


// put todo
router.put("/:id",async(req,res)=>{
    try {
        await User.update({_id:req.params.id},{
            $set:{
                status:'active'
            }
        },(err,data)=>{
            if(err){
                res.status(500).json({
                    error:"there was a server side error"
                })
            }
            else{
                res.status(200).json({
                    messsage:"User was update successfully",
                    result:data
                })
            }
        })
        
    } catch (error) {
        console.log(error);
    }
});


// delete user
router.delete("/:id",async(req,res)=>{
    try {
        await User.deleteOne({_id:req.params.id},(err)=>{
            if(err){
                res.status(500).json({
                    error:"There was a server side error",
                });
            }
            else{
                res.status(200).json({
                    messsage:"user was deleted successfully!",
                })
            }
        })
    } catch (error) {
        console.log(error);
    }
    
});

module.exports=router;