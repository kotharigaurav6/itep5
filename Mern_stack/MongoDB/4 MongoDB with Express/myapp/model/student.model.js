import createConnection from '../model/dbConfig.js'; 

export const StudentModel = async function(request, response, next) {
    var payload = request.body;
    console.log(payload);
    try{
        //console.log(db);
        const db = await createConnection();
    var res =  await db.collection("student").insertOne(payload);
      //  console.log(res);
        console.log("Data Inserted Successfully");
        response.render("index");
    }catch(err){
        console.log("Error : "+err);
    }
}

export const ViewStudentsModel =async function(request, response, next) {
    try{   
        var db = await createConnection();
        var result =await db.collection("student").find().toArray();
       // console.log(res); 
       response.render("viewstudent",{result:result});
    }catch(err){
        console.log("Error : "+err);
     }
}

export const SearchByIdModel =async function(request, response, next) {
    var data = request.query;
    console.log(data);
   
    try{   
        var db = await createConnection();
        var result =await db.collection("student").find({email:data.email},{name:1,email:1,password:1}).toArray();
        console.log(result); 
       if(result==null)
           response.render("searchform",{result:"",message:"No Record Found"});
       else
           response.render("searchform",{result:result,message:""});
    }catch(err){
        //console.log("Error : "+err);
        response.render("searchform",{result:"",message:""});
    }
}
