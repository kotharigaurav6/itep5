import express from 'express';
import ejs from 'ejs';
import cookieParser from 'cookie-parser';
import expresssession from 'express-session';
import indexRouter from './routes/indexRouter.js';
import recruiterRouter from './routes/recruiterRouter.js';
import adminRouter from './routes/adminRouter.js';

var app = express();

app.set("views","views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(expresssession({secret:'mysessionsecretkey',resave:true,saveUninitialized:true}));
app.use(cookieParser());
app.use("/",indexRouter);
app.use("/admin",adminRouter);
app.use("/recruiter",recruiterRouter);

app.listen(3000,()=>{
    console.log("Server connection successful");
});