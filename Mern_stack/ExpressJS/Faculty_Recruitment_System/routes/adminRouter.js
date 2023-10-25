import express from 'express';
import { adminLoginController,adminLogoutController,adminRecruiterListController,adminVerifyRecruiterController } from '../controller/adminController.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
var secret_key = process.env.ADMIN_SECRET_KEY;

const authenticateJWT = (request,response,next)=>{
    var token = request.cookies.admin_jwt_token;
    if(!token)
        response.render("adminLogin",{message:""});
    else{    
        jwt.verify(token,secret_key,(err,payload)=>{
            if(err)
                response.render("adminLogin",{message:""});
            else{
                request.payload = payload;
                next();
            }    
        });
    }    
}

var adminRouter = express.Router();

adminRouter.use(express.static('public'));

adminRouter.get("/",authenticateJWT,(request,response)=>{
    response.render("adminHome",{adminemail:request.payload._id});
});
adminRouter.get("/adminLogin",authenticateJWT,(request,response)=>{
    response.render("adminHome",{adminemail:request.payload._id});
});

adminRouter.post("/adminLogin",adminLoginController);
adminRouter.get("/adminLogout",adminLogoutController);
/*
adminRouter.get("/recruiterList",(request,response)=>{
    if(request.session.adminemail){
        response.render("adminRecruiterList");
    }else{
        response.render("adminLogin",{message:"Needs to Login First"});
    }
});
*/
adminRouter.get("/recruiterList",authenticateJWT,adminRecruiterListController);
adminRouter.get("/adminVerifyRecruiter",authenticateJWT,adminVerifyRecruiterController);

export default adminRouter;