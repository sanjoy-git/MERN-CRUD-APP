 const mongoose = require("mongoose");

const userSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    status:{
        type:String,
        enum:['active','inactive']
    },
    date:{
        type:Date,
        default:Date.now, 
    }
})

// module.exports=mongoose.model("User",userSchema);

module.exports=userSchema;