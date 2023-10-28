import AppliedVacancy from '../model/appliedVacancyModel.js';
import Vacancy from '../model/vacancyModel.js';

export const applyVacancyController = async(request,response)=>{
     var vid = request.query._id;
     var candidateemail = request.query.candidateemail;
     var recruiteremail = request.query.recruiteremail;
     var post = request.query.post;
    var obj = {vid,candidateemail,recruiteremail,post};
     try{
            var check = {
                $and:[
                    {vid:vid},
                    {candidateemail:candidateemail}
                ]
            };
            var status = await AppliedVacancy.findOne(check);
            console.log("Applied status : ",status);
            if(!status){
                var appliedObj = await AppliedVacancy.create(obj);
                console.log("appliedObj : ",appliedObj);
                console.log("Applied for Vacancy Successfully");
    
                var vacancyList = await Vacancy.find();
                response.render("candidateVacancyList",{result:vacancyList,candidateemail:request.payload._id,message:"Applied for Vacancy Successfully"});
    
            }else{
                var vacancyList = await Vacancy.find();
                response.render("candidateVacancyList",{result:vacancyList,candidateemail:request.payload._id,message:"Already Applied for Vacancy"});
            }
       
        }catch(err){
        console.log("Error while Applying for vacancy inside applied vacancy controller : "+err);
        response.render("error",{message:"Error while Applying for vacancy inside applied vacancy controller"});
    } 
  
  };
  
