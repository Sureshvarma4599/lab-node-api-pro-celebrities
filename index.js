const express = require('express');
const bodyParser = require('body-parser');
var controller=require('./controllers/celebrityController.js')
const mongoose = require('./db.js');
var app =express();

app.use(bodyParser.json())
app.listen(4500,()=>console.log("server started at port : 4500"))
app.use('/celebrity',controller)