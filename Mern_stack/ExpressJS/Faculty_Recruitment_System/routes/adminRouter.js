import express from 'express';
import { adminLoginController } from '../controller/adminController.js';
var adminRouter = express.Router();

adminRouter.use(express.static('public'));

adminRouter.get("/",(request,response)=>{
    response.render("adminHome");
});

adminRouter.get("/adminLogin",(request,response)=>{
    response.render("adminLogin");
});

adminRouter.post("/adminLogin",adminLoginController);

adminRouter.get("/recruiterList",(request,response)=>{
    response.render("adminRecruiterList");
});

export default adminRouter;