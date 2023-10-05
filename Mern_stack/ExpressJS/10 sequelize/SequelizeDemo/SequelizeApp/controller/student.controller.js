import StudentModel from '../model/student.model.js'; 

export const StudentController = function(request, response, next) {
    var payload = request.body;
    console.log(payload);
    StudentModel.create(payload).then(()=>{
        console.log("Data Inserted Successfully");
        //res.json({message:"Data Inserted Successfully..!!"});
        response.render("index");
    }).catch((err)=>{
        console.log("Error occured : "+err);
    });
}

export const ViewStudentsController = function(request, response, next) {
    StudentModel.findAll().then((result)=>{
        response.render("viewstudent",{result:result});
    }).catch((err)=>{
        console.log("Error occured : "+err);
    });
}

export const SearchController = function(request, response, next) {
        response.render("searchform",{result:"",message:""});
}

export const SearchByIdController = function(request, response, next) {
    var data = request.query;
    console.log(data);
    StudentModel.findOne({
        where :{
            sid:data.sid
        }
    }).then((result)=>{
        console.log(result);
        if(result==null)
            response.render("searchform",{result:"",message:"No Record Found"});
        else
            response.render("searchform",{result:result,message:""});
    }).catch((err)=>{
        response.render("searchform",{result:"",message:""});
    });
}
