// const router=require('express').Router();
// const userSchema = require('../models/User.model.schema');


// router.post("/",async(req,res)=>{

//     const filter={_id:req.body._id}

//     const update={
//         name:req.body.name,
//         age:req.body.age,
//         city:req.body.city,
//         country:req.body.country
//     }

//     let doc=await userSchema.findOneAndUpdate(filter,update);

//     res.status(200).send(res.body);
// });

// module.exports=router;