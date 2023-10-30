import Candidate from '../model/candidateModel.js';
import Vacancy from '../model/vacancyModel.js';
import mailer from './mailer.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import path from 'path';
import AppliedVacancy from '../model/appliedVacancyModel.js';

dotenv.config();
var secret_key = process.env.CANDIDATE_SECRET_KEY;

export const candidateRegistrationController = async(request,response)=>{
  var __filename = fileURLToPath(import.meta.url);
  var __dirname = path.dirname(__filename).replace("\\controller","");

  var filename = request.files.docs;
  var fileName = new Date().getTime()+filename.name;
  var pathName = path.join(__dirname,"/public/assets/images/",fileName);
  filename.mv(pathName,async (error)=>{
    if(error){
        console.log(error);
        response.render("error",{message:"Error while uploading document in candidate controller"});
    }
    else{
        try{

        const {name,email,password,gender,date,address,contact,qualification,percentage,experience} = request.body;
        var obj = {
          name : name,
          _id : email,
          password : await bcrypt.hash(password,10),
          gender:gender,
          date:date,
          address : address,
          contact:contact,
          qualification:qualification,
          percentage:percentage,
          experience:experience,
          docs:fileName 
        }
        var mailContent = "Hello "+email+",<br>Welcome to Programming Stairs. It's a <b>Verification Mail</b> from <b>Programming Stairs</b>.<br><br>Please Click on the below <b>Link</b> to Verify.<br> <a href='http://localhost:3000/candidate/verifyemail?email="+email+"'>Click Here to Verify</a>";

        mailer.mailer(mailContent,email,async (info)=>{
            var expireTime = {expiresIn : '1d'};
            var token = jwt.sign({_id:email},secret_key,expireTime); 
            
            if(!token)
                response.render("error",{message:"Error while generating token inside mailer at registration"});
    
            response.cookie('candidate_jwt_token',token,{maxAge:24*60*60*1000,httpOnly:true});
    
            var result = await Candidate.create(obj); 
            console.log(result);
            response.render("candidateLogin",{message:"Email sent | Please Verify"});
        });
      }catch(err){
        console.log("candidate Registration Error : "+err);
      } 
    }    
  });
};

export const candidateEmailController =async (request,response)=>{
  var email = request.query.email;
  var updateStatus = {$set:{emailverify:"Verified"}};
  var res = await Candidate.updateOne({_id:email},updateStatus);
  console.log("Email verified : "+res);
  response.render("candidateLogin",{message:"Email Verified Succesfully"});
};

export const candidateLoginController = async(request,response)=>{
  const {email,password} = request.body;
  try{
      var expireTime = {expiresIn : '1d'};
      var token = jwt.sign({_id:email},secret_key,expireTime); 
      
      if(!token)
          response.render("error",{message:"Error while generating token inside candidate login"});

      response.cookie('candidate_jwt_token',token,{maxAge:24*60*60*1000,httpOnly:true});
      var candidateObj = await Candidate.findOne({_id:email});
      var candidatePassword = candidateObj.password;
      var status = await bcrypt.compare(password,candidatePassword);
      console.log(status);
      if(status){
          response.render("candidateHome",{candidateemail:email});
      }else{
          response.render("candidateLogin",{message:"Error while Login"});
      }
  }catch(err){
      console.log("Error in candidate login controller : "+err);
  }
};

export const candidateViewVacancyController = async (request,response)=>{
    try{
        var vacancyList = await Vacancy.find();
        response.render("candidateVacancyList",{result:vacancyList,candidateemail:request.payload._id,message:""});
    }   catch(err){
        console.log("Error in candidate view vacancy Controller"+err);
        response.render("error",{message:"Error in candidate view vacancy Controller"});
    } 
};

export const candidateViewStatusController = async (request,response)=>{
  try{
      var candidateList = await AppliedVacancy.find({candidateemail:request.payload._id});
      response.render("candidateStatus",{result:candidateList});
  }   catch(err){
      console.log("Error in candidate view status Controller"+err);
      response.render("error",{message:"Error in candidate view status Controller"});
  } 
};

export const candidateLogoutController = (request,response)=>{
   response.clearCookie('candidate_jwt_token');    
   response.render("candidateLogin",{message:"Successfully Logout"});
};

// email : kotharigaurav6@gmail.com
// password : gaurav@123