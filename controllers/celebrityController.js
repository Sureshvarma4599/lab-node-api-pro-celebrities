const { json } = require('body-parser');
const express = require('express');
var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Celebrities} = require('../models/celebrity.js');
 router.get('/',(req,res)=>{
     Celebrities.find((err,docs)=>{
         if(!err){
             res.send(docs);
         }
         else{
             console.log(json.stringify(err))
         }
     })
 })

 router.post('/',(req,res)=>{
     var data = new Celebrities({
         name : req.body.name,
         occupation : req.body.occupation,
         catchPhrase : req.body.catchPhrase
     })
     data.save((err,docs)=>{
         
        if(!err){
            res.send(docs);
        }
        else{
            console.log(json.stringify(err))
        }

     })
 })

 
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var data = {
        name : req.body.name,
         occupation : req.body.occupation,
         catchPhrase : req.body.catchPhrase
        
    };
    Celebrities.findByIdAndUpdate(req.params.id, { $set: data }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Celebrities.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
 module.exports=router;