import express from 'express';
import userRouter from './router/userRouter.js';
import connection from './connection/dbConfig.js';
import cors from 'cors';
var app = express();

app.use(cors());
app.use(express.urlencoded({expanded:true}));
app.use(express.json());

app.use("/user",userRouter);

app.listen(3001,()=>{
    console.log("Server Connection Successfull");
});