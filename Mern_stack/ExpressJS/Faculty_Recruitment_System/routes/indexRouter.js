import express from 'express';
var indexRouter = express.Router();

indexRouter.get("/",(request,response)=>{
    response.render("index");
});


export default indexRouter;