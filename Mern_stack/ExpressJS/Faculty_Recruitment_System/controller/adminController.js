import adminModel from "../model/adminModel.js";
import recruiterModel from "../model/recruiterModel.js";

import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();
var secret_key = process.env.ADMIN_SECRET_KEY;

export const adminLoginController = async(request,response)=>{
    const {email,password} = request.body;
    try{
        var expireTime = {expiresIn : '1d'};
        var token = jwt.sign({_id:email},secret_key,expireTime); 
        
        if(!token)
            response.render("error",{message:"Error while generating token inside admin login"});

        response.cookie('admin_jwt_token',token,{maxAge:24*60*60*1000,httpOnly:true});
        var adminObj = await adminModel.findOne({_id:email});
        var adminPassword = adminObj.password;
        var status = await bcrypt.compare(password,adminPassword);
        if(status){
            //request.session.adminemail=email;
            //request.session.save();
            response.render("adminHome",{adminemail:email});
        }else{
            response.render("adminLogin",{message:"Error while Login"});
        }
    }catch(err){
        console.log("Error in admin login controller : "+err);
    }
};

export const adminLogoutController = (request,response)=>{
    // request.session.adminemail=null;
    // request.session.destroy();
    // response.cookie('admin_jwt_token',"");
     response.clearCookie('admin_jwt_token');    
     response.render("adminLogin",{message:"Successfully Logout"});
 };

 export const adminRecruiterListController = async (request,response)=>{
    try{
        var recruiterList = await recruiterModel.find();
        response.render("adminRecruiterList",{result:recruiterList});
    }   catch(err){
        console.log("Error in adminRecruiterList Controller"+err);
        response.render("err",{message:"Error in adminRecruiterList Controller"});
    } 
};

export const adminVerifyRecruiterController = async (request,response)=>{
    try{
        var _id = request.query._id;
        var updateStatus = {$set : {adminverify:"Verified"}};
        await recruiterModel.updateOne({_id:_id},updateStatus);

        var recruiterList = await recruiterModel.find();
        response.render("adminRecruiterList",{result:recruiterList});
    }catch(err){
        console.log("Error in admin verify Recruiter Controller");
        response.render("error",{message:"Error in admin verify Recruiter Controller"});
    }
};