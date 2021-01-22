const { Router } = require('express');
const express=require('express');
const route=require('./Routes/route.js')
const port=2021;
const app=express();
const bodyParser=require('body-parser');
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Methods','GET,POST'),
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization'),
    next();
})
app.use(bodyParser.json());
app.use('/api',route);
app.listen(port,()=>{
    console.log(`server connected at ${port}`)
})