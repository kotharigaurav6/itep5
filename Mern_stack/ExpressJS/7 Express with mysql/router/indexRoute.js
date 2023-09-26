import express from 'express';
import {indexAddController,indexCheckController,indexUpdateFormController,indexUpdateDataController,indexLogoutController} from '../controller/indexController.js';

var indexRouter = express.Router();

indexRouter.get("/",(request,response)=>{
    response.render("index",{email:""});
});
indexRouter.get("/login",(request,response)=>{
    response.render("login",{email:""});
});
indexRouter.get("/register",(request,response)=>{
    response.render("register",{email:""});
});
indexRouter.post("/adddata",indexAddController);
indexRouter.post("/checkuser",indexCheckController);
indexRouter.get("/update",indexUpdateFormController);
indexRouter.post("/updatedata",indexUpdateDataController);
indexRouter.get("/logout",indexLogoutController);
export default indexRouter;