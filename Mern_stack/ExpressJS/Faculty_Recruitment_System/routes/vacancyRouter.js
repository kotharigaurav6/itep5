import express from 'express';
import { addVacancyController,recruiterViewVacancyController,recruiterDeleteVacancyController,updateVacancyController,recruiterUpdateVacancyController,appliedCandidateController } from '../controller/vacancyController.js';
import dotenv from 'dotenv';
//import jwt from 'jsonwebtoken';
import {authenticateJWT} from './recruiterRouter.js';
// dotenv.config();
// var secret_key = process.env.SECRET_KEY;
/*
const authenticateJWT = (request,response,next)=>{
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
*/

var vacancyRouter = express.Router();
vacancyRouter.use(express.static('public'));

vacancyRouter.post("/addVacancy",authenticateJWT,addVacancyController);
vacancyRouter.get("/recruiterViewVacancy",authenticateJWT,recruiterViewVacancyController);
vacancyRouter.get("/deleteVacancy",authenticateJWT,recruiterDeleteVacancyController);
vacancyRouter.get("/updateVacancy",authenticateJWT,updateVacancyController);
vacancyRouter.put("/updateVacancy",authenticateJWT,recruiterUpdateVacancyController);
vacancyRouter.get("/appliedCandidate",authenticateJWT,appliedCandidateController);

export default vacancyRouter;