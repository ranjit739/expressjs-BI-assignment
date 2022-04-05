const express=require('express');
const app=express();
const studentRoute=require('./api/routes/student');
app.use('/student',studentRoute);
app.use((req,res,next)=>{
    res.status(200).json({
        mes:'app is running on local host'
    })
})
module.exports=app;

