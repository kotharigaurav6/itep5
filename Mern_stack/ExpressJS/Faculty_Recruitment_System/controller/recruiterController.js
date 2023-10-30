import Recruiter from '../model/recruiterModel.js';
import mailer from './mailer.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import AppliedCandidate from '../model/appliedVacancyModel.js';
import Candidate from '../model/candidateModel.js';

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

export const recruiterLoginController = async(request,response)=>{
  const {email,password} = request.body;
  try{
      var expireTime = {expiresIn : '1d'};
      var token = jwt.sign({_id:email},secret_key,expireTime); 
      
      if(!token)
          response.render("error",{message:"Error while generating token inside recruiter login"});

      response.cookie('jwt_token',token,{maxAge:24*60*60*1000,httpOnly:true});
      var recruiterObj = await Recruiter.findOne({_id:email});
      var recruiterPassword = recruiterObj.password;
      var status = await bcrypt.compare(password,recruiterPassword);
      console.log(status);
      if(status){
          response.render("recruiterHome",{recruiteremail:email});
      }else{
          response.render("recruiterLogin",{message:"Error while Login"});
      }
  }catch(err){
      console.log("Error in recruiter login controller : "+err);
  }
};

export const recruiterUpdateCandidateStatusController =async (request,response)=>{
  var vid = request.query.vid;
  var updateStatus = {$set:{status:"ShortListed"}};
  var res = await AppliedCandidate.updateOne({vid:vid},updateStatus);
  console.log("Status Updated : "+res);

  var candidateList = await AppliedCandidate.find({recruiteremail:request.payload._id});
  var candidateFile=[];
  for(var i=0;i<candidateList.length;i++){
      var filename = await Candidate.findOne({_id : candidateList[i].candidateemail});
      candidateFile.push(filename.docs);
  }
  response.render("appliedCandidateList",{result:candidateList,candidateDocs:candidateFile});
};

export const recruiterLogoutController = (request,response)=>{
   response.clearCookie('jwt_token');    
   response.render("recruiterLogin",{message:"Successfully Logout"});
};

// email : kotharigaurav6@gmail.com
// password : gaurav@123