// const express = require("express");

// const router=express.Router();

// // const user2Router=require('./user2.router');

// // const {getUser}=require("../controllers/User.controller");
// const {getData}=require("../controllers/get.controller");
// const {createData}=require("../controllers/create.controller");
// // router.use(user2Router);

// router.route('/user')
//     .all((req,res,next)=>{
//         console.log(`i am logging something`);
//         next();
//     })
//     .get(getData)
//     .post(createData)
//     .put((req,res)=>{
//         res.send(`Put data`);
//     })
//     .delete((req,res)=>{
//         res.send(`Delete data`);
//     })

// module.exports=router;