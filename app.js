/********************************************************
*********************************************************

->INTRODUCTION
Project Title: Support-India
Staring Date: 26-03-2020
Author: Team Olecons

->COMMAND TO RUN THIS APPLICATION:
node apps.js 

*********************************************************
*********************************************************/

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const adminRouter = require('./router/admin');
const mongodbConnection = require('./utility/mongodb');
const app = express();

const PORT = process.env.PORT || 3000 

// Body Parser Middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// Inbuild Middleware
app.use(express.static(path.join(__dirname,'public')));

// Router Handler
app.use('/admin',adminRouter);

// Error Handling 
app.get('*',function(req,res){
    res.status(404).json({error:'Invalid Request'});
});

// Server
app.listen(PORT,function(error){
    if(error) throw error ;
    console.log("Server listening on port",PORT);
});