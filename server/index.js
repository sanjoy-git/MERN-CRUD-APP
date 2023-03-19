const express=require('express');
require('dotenv').config();
const app=express();

// app.use(express.json());

app.set('view engine','ejs');

//Database Connection
const dataBase1=require('./models/db.connection');
dataBase1.dataBaseFunction();

const userRouter=require('./routers/view-router')
app.use(userRouter);




// Error Handeling
app.use((req,res,next)=>{
    next('Requested url was not found!')
})

app.use((err,req,res,next)=>{
    if(res.headersSent){
        next('Header is already send!');
    }
    else{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.send(`There was an error!`)
        }
    }
})

// Server create and run
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running. http://localhost:${PORT}`);
})