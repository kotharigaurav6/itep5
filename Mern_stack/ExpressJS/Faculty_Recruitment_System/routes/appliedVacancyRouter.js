import express from 'express';
import { applyVacancyController } from '../controller/appliedVacancyController.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
var secret_key = process.env.CANDIDATE_SECRET_KEY;

const authenticateJWT = (request,response,next)=>{
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

var appliedVacancyRouter = express.Router();
appliedVacancyRouter.use(express.static('public'));

appliedVacancyRouter.get("/applyVacancy",authenticateJWT,applyVacancyController);
export default appliedVacancyRouter;