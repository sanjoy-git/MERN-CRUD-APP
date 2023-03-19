const userSchema = require('../models/user.model.schema');


exports.createData=("/",async(req,res)=>{
    const response=await new userSchema({
        name:req.body.name,
        age:req.body.age,
    }).save();

    res.status(200).send(response);
});





