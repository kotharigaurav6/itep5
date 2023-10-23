import Recruiter from '../model/recruiterModel.js';
import mailer from './mailer.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();
var secret_key = process.env.SECRET_KEY;

export const recruiterRegistrationController = async(request,response)=>{
  const {name,type,email,password,contact,address} = request.body;
  var obj = {
    name : name,
    type : type,
    _id : email,
    password : await bcrypt.hash(password,10),
    contact : contact,
    address : address 
  }
  try{
    var mailContent = "Hello "+email+",<br>Welcome to Programming Stairs. It's a <b>Verification Mail</b> from <b>Programming Stairs</b>.<br><br>Please Click on the below <b>Link</b> to Verify.<br> <a href='http://localhost:3000/recruiter/verifyemail?email="+email+"'>Click Here to Verify</a>";

    mailer.mailer(mailContent,email,async (info)=>{
        var expireTime = {expiresIn : '1d'};
        var token = jwt.sign({_id:email},secret_key,expireTime); 
        
        if(!token)
            response.render("error",{message:"Error while generating token inside mailer at registration"});

        response.cookie('jwt_token',token,{maxAge:24*60*60*1000,httpOnly:true});

        var result = await Recruiter.create(obj); 
        console.log(result);
        response.render("recruiterLogin",{message:"Email sent | Please Verify"});
    });
  }catch(err){
    console.log("Recruiter Registration Error : "+err);
  } 

};

export const recruiterEmailController =async (request,response)=>{
  var email = request.query.email;
  var updateStatus = {$set:{emailverify:"Verified"}};
  var res = await Recruiter.updateOne({_id:email},updateStatus);
  console.log("Email verified : "+res);
  response.render("recruiterLogin",{message:"Email Verified Succesfully | Please Wait for Admin Approval within 24 Hours"});
};