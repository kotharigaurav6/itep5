import StudentModel from '../model/student.model.js'; 

export const StudentController = function(req, res, next) {
    var payload = req.body;
    StudentModel.create(payload).then(()=>{
        console.log("Data Inserted Successfully");
        res.json({message:"Data Inserted Successfully..!!"});
    }).catch(()=>{
        console.log("Error occured");
    });
}