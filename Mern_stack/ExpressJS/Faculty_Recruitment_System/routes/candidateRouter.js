import express from 'express';
import { candidateRegistrationController,candidateEmailController,candidateLoginController,candidateLogoutController,candidateViewVacancyController } from '../controller/candidateController.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
var secret_key = process.env.CANDIDATE_SECRET_KEY;

export const authenticateJWT = (request,response,next)=>{
    var token = request.cookies.candidate_jwt_token;
    if(!token)
        response.render("candidateLogin",{message:""});
    else{    
        jwt.verify(token,secret_key,(err,payload)=>{
            if(err)
                response.render("candidateLogin",{message:""});
            else{
                request.payload = payload;
                next();
            }    
        });
    }    
}

var candidateRouter = express.Router();

candidateRouter.use(express.static('public'));

candidateRouter.get("/candidateLogin",(request,response)=>{
    response.render("candidateLogin",{message:""});
});

candidateRouter.get("/candidateRegister",(request,response)=>{
    response.render("candidateRegistration");
});

candidateRouter.post("/candidateRegistration",candidateRegistrationController);
candidateRouter.get("/verifyemail",candidateEmailController);
candidateRouter.post("/candidateLogin",candidateLoginController);
candidateRouter.get("/viewVacancy",authenticateJWT,candidateViewVacancyController);
candidateRouter.get("/candidateLogout",candidateLogoutController);

export default candidateRouter;