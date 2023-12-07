import userModel from "../model/userModel.js";

export const userRegistrationController = async (request,response)=>{
    try{
        console.log(request.body);
        var data = await userModel.create(request.body);
        console.log(data);
        if(data){
            response.status(201).json({status: true});
        }
    }catch(err){
        console.log("Error in user registration controller : ",err);
        response.status(500).json({status:false});
    }
}

export const userLoginController = async (request,response)=>{
    try{
        console.log(request.body);
        var check = {
            $and : [
                {email:request.body.email},
                {password:request.body.password}
            ]
        };
        var data = await userModel.findOne(check);
        console.log(data);
        if(data){
            response.status(201).json({status: true,obj:request.body});
        }
    }catch(err){
        console.log("Error in user login controller : ",err);
        response.status(500).json({status:false});
    }
}

export const userListController = async (request,response)=>{
    try{
        var userList = await userModel.find();
        console.log(userList);
        if(userList){
            response.status(201).json({status: true,userList:userList});
        }
    }catch(err){
        console.log("Error in user registration controller : ",err);
        response.status(500).json({status:false});
    }
}
