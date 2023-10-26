import express from 'express';
import { recruiterRegistrationController,recruiterEmailController,recruiterLoginController,recruiterLogoutController } from '../controller/recruiterController.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
var secret_key = process.env.SECRET_KEY;

export const authenticateJWT = (request,response,next)=>{
    var token = request.cookies.jwt_token;
    if(!token)
        response.render("recruiterLogin",{message:""});
    else{    
        jwt.verify(token,secret_key,(err,payload)=>{
            if(err)
                response.render("recruiterLogin",{message:""});
            else{
                request.payload = payload;
                next();
            }    
        });
    }    
}

var recruiterRouter = express.Router();

recruiterRouter.use(express.static('public'));

recruiterRouter.get("/recruiterLogin",(request,response)=>{
    response.render("recruiterLogin",{message:""});
});

recruiterRouter.get("/recruiterRegister",(request,response)=>{
    response.render("recruiterRegistration");
});

recruiterRouter.post("/recruiterRegistration",recruiterRegistrationController);
recruiterRouter.get("/verifyemail",recruiterEmailController);
recruiterRouter.post("/recruiterLogin",recruiterLoginController);
recruiterRouter.get("/addVacancy",authenticateJWT,(request,response)=>{
    response.render("addVacancy",{message:""});
});
recruiterRouter.get("/recruiterLogout",recruiterLogoutController);

export default recruiterRouter;