import express from 'express';
var recruiterRouter = express.Router();

recruiterRouter.use(express.static('public'));

recruiterRouter.get("/recruiterLogin",(request,response)=>{
    response.render("recruiterLogin");
});


export default recruiterRouter;