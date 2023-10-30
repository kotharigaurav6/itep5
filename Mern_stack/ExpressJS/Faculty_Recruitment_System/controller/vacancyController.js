import Vacancy from '../model/vacancyModel.js';
import Recruiter from '../model/recruiterModel.js';
import AppliedVacancy from '../model/appliedVacancyModel.js';
import Candidate from '../model/candidateModel.js';

export const addVacancyController = async(request,response)=>{
     var recruiter_id = request.payload._id;
    // console.log("request.body data : ",request.body);
    // console.log("recruiter email : "+recruiter_id);
    // request.body.recruiteremail = recruiter_id;
    // console.log("recruiter email in request body : ",request.body);

    try{
            var recruiterObj = await Recruiter.findOne({_id:recruiter_id});
            console.log("recruiterObj : ",recruiterObj);
            request.body.recruiteremail = recruiter_id;
            request.body.recruitertype = recruiterObj.type;
            request.body.recruitername = recruiterObj.name;
            console.log("recruiterObj type : ",recruiterObj.type);
            console.log("recruiterObj name : ",recruiterObj.name);
            console.log("request.body : ",request.body);

            var vacancyObj = await Vacancy.create(request.body);
            console.log("Vacancy Added Successfully");
            response.render("addVacancy",{message:"Vacancy Added Successfully"});
    }catch(err){
        console.log("Error while Adding vacancy inside vacancy controller : "+err);
        response.render("error",{message:"Error while Adding vacancy inside vacancy controller"});
    } 
  
  };
  
  export const recruiterViewVacancyController = async (request,response)=>{
    try{
        var vacancyList = await Vacancy.find({recruiteremail:request.payload._id});
        response.render("recruiterVacancyList",{result:vacancyList});
    }   catch(err){
        console.log("Error in recruiter view vacancy Controller"+err);
        response.render("error",{message:"Error in recruiter view vacancy Controller"});
    } 
};

export const recruiterDeleteVacancyController = async (request,response)=>{
    try{
        var _id = request.query._id;
        var status = await Vacancy.deleteOne({_id:_id});
        console.log("Vacancy deleted sucessfully",status);
        var vacancyList = await Vacancy.find({recruiteremail:request.payload._id});
        response.render("recruiterVacancyList",{result:vacancyList});
    }   catch(err){
        console.log("Error in recruiter delete vacancy Controller"+err);
        response.render("error",{message:"Error in recruiter delete vacancy Controller"});
    } 
};

export const updateVacancyController = async (request,response)=>{
   try{
        var _id = request.query._id;
        var vacancyObj = await Vacancy.findOne({_id:_id});
        console.log(vacancyObj);
        response.render("updateVacancy",{result : vacancyObj});
   }catch(err){
        console.log("error in update vacancy controller");
        response.render("error",{message: "error in update vacancy controller"}); 
   }
 };


 export const recruiterUpdateVacancyController=async (request,response)=>{
    try{
            var _id = request.query._id;
            var updateData = {
                $set : request.body
            }

            var status = await Vacancy.updateOne({_id:_id},updateData);
            console.log(status);

            var vacancyList = await Vacancy.find({recruiteremail:request.payload._id});
            response.render("recruiterVacancyList",{result:vacancyList});
    }catch(err){
        console.log("Error while recruiter updating vacancy controller "+err);
        response.render("error",{message:"Error while recruiter updating vacancy controller"});
    }
};

export const appliedCandidateController = async (request,response)=>{
    try{
        var candidateList = await AppliedVacancy.find({recruiteremail:request.payload._id});
        var candidateFile=[];
        for(var i=0;i<candidateList.length;i++){
            var filename = await Candidate.findOne({_id : candidateList[i].candidateemail});
            candidateFile.push(filename.docs);
        }
        response.render("appliedCandidateList",{result:candidateList,candidateDocs:candidateFile});
    }   catch(err){
        console.log("Error in applied candidate Controller"+err);
        response.render("error",{message:"Error in applied candidate Controller"});
    } 
};
