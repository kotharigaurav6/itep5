import express from 'express';
import { recruiterRegistrationController,recruiterEmailController } from '../controller/recruiterController.js';

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

export default recruiterRouter;