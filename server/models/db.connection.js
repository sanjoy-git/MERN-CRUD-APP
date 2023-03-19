const mongoose=require('mongoose');

module.exports={
    dataBaseFunction:()=>{
        try {
            const dbConnectionUrl=process.env.MONGO_URL;
            
            //database connection with mongoose
            mongoose
                .connect(dbConnectionUrl,{
                    // useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true
                })
                .then(()=>console.log("connection successful"))
                .catch((err)=>console.error(err));        
        } catch (error) {
            console.log(`Database connection error!`);
        }
    }
}