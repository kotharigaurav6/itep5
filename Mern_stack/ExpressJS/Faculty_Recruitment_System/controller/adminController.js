import adminModel from "../model/adminModel";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
var secret_key = process.env.SECRET_KEY;

export const adminLoginController = async(request,response)=>{
    const {email,password} = request.body;
    try{
        var expireTime = {expiresIn : '1d'};
        var token = jwt.sign({_id:email},secret_key,expireTime); 
        
        if(!token)
            response.render("error",{message:"Error while generating token inside admin login"});

        response.cookie('jwt_token',token,{maxAge:24*60*60*1000,httpOnly:true});
        var adminObj = await adminModel.findOne({_id:email});
        var adminPassword = adminObj.password;
        var status = await bcrypt.compare(password,adminPassword);
        if(status){
            /* manage session | needs to make an entry in database for admin with bcrypt password */
            response.render("adminHome");
        }else{

        }
    }catch(err){
        console.log("Error in admin login controller : "+err);
    }
};