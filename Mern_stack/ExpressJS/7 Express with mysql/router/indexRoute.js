import express from 'express';
import {indexAddController} from '../controller/indexController.js';

var indexRouter = express.Router();

indexRouter.get("/",(request,response)=>{
    response.render("index");
});
indexRouter.get("/login",(request,response)=>{
    response.render("login");
});
indexRouter.get("/register",(request,response)=>{
    response.render("register");
});
indexRouter.post("/adddata",indexAddController);

export default indexRouter;