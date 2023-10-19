import express from 'express';
import ejs from 'ejs';
import userRouter from './router/userRouter.js';

var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("views","views");
app.set("view engine","ejs");

app.use("/",userRouter);

app.listen(3000,()=>{
    console.log("Server connection successfull");
});