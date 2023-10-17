import express from 'express';
import User from './model/User.js';
import url from './config/dbConfig.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(url);
app.post('/api/insertdata',async (request,response)=>{
    const user = new User(request.body);
    try{
        await user.save();
        response.status(201).send(user);
    }catch(err){
        console.log("Error in insertdata api");
        response.status(500).send(err);
    }
});
app.get('/api/showalldata',async (request,response)=>{
    try{
        var data = await User.find();
        response.status(200).send(data);
    }catch(err){
        console.log("Error in showalldata api");
        response.status(500).send(err);
    }
});
app.get('/api/showspecificname',async (request,response)=>{
    try{
        var data = await User.find({name:"Andrew Anderson"});
        response.status(200).send(data);
    }catch(err){
        console.log("Error in showspecificname api");
        response.status(500).send(err);
    }
});
app.get('/api/:specificname',async (request,response)=>{
    try{
        var name = request.params.specificname;
        var data = await User.find({name:name});
        response.status(200).send(data);
    }catch(err){
        console.log("Error in specificname api");
        response.status(500).send(err);
    }
});

// 652ce2963617255ddc0bebe6
app.get('/api/searchbyid/:_id',async (request,response)=>{
    try{
        var _id = request.params._id;
        var data = await User.find({_id:_id});
        response.status(200).send(data);
    }catch(err){
        console.log("Error in shearching by id api");
        response.status(500).send(err);
    }
});

app.put('/api/updateuser/:_id',async (request,response)=>{
    try{
        var _id = request.params._id;
        var updateData = {$set : request.body};
        var data = await User.updateOne({_id:_id},updateData);
        response.status(200).send(data);
    }catch(err){
        console.log("Error in shearching by id api");
        response.status(500).send(err);
    }
});

app.put('/api/update/:_id',async (request,response)=>{
    try{
        var _id = request.params._id;
        var data = await User.findByIdAndUpdate({_id},request.body);
        response.status(200).send(data);
    }catch(err){
        console.log("Error in shearching by id api");
        response.status(500).send(err);
    }
});

app.delete('/api/deleteuser/:_id',async (request,response)=>{
    try{
        var _id = request.params._id;
        var data = await User.findByIdAndDelete({_id});
        response.status(200).send(data);
    }catch(err){
        console.log("Error in shearching by id api");
        response.status(500).send(err);
    }
});



app.listen(3000,()=>{
    console.log("Server connection established");
});