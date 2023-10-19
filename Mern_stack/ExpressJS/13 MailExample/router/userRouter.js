import express from 'express';
import mongoose from 'mongoose';
import urlconnection from '../model/config.js';
import User from '../model/User.js';
import mailer from './mailer.js';

var userRouter = express.Router();
mongoose.connect(urlconnection.url);
userRouter.get("/",(request,response)=>{
    response.render("index");
});
userRouter.get("/login",(request,response)=>{
    response.render("login",{message:""});
});
userRouter.get("/register",(request,response)=>{
    response.render("register");
});

userRouter.post("/register",async(request,response)=>{
    //console.log(request.body);
    try{
        mailer.mailer(request.body._id,async (info)=>{
            console.log("info : ");
            console.log(info);

            if(info){
                await User.create(request.body);
                console.log("Registration Successfull");
                response.render("login",{message:"Need to verify Email Before Login"});
            }
        });
    }catch(err){
        console.log("Error while registration");
    }
});

userRouter.get("/verifyemail",async(request,response)=>{
    var email = request.query.email;
    var statusUpdate = {$set : {status:"Verified"}};
    try{
        await User.updateOne({_id:email},statusUpdate);
        console.log("Mail Verified");
        response.render("login",{message:"Email Verified | You can Login"});
    }catch(err){
        console.log("Error while updating record");
        response.render("login",{message:"Error while updating record"});     
    }
});

userRouter.post("/login",async (request,response)=>{
    var email = request.body.email;
    var password = request.body.password;
    var checkLogin = {
        $and:[
            {
                _id:email
            },{
                password:password
            }
        ]
    }
    try{
        var record = await User.findOne(checkLogin);
         console.log(record);
        //  console.log(record.status);
        if(record!=null){
            if(record.status=="Verified")
                response.render("home",{email:email});
            else
                response.render("login",{message:"Not Verified"});
        }else
            response.render("login",{message:"Wrong Email Id or Password"});
    }catch(err){
        console.log(err);
    }
});
export default userRouter;