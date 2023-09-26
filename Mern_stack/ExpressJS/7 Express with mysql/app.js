import express from 'express';
import bodyParser from 'body-parser';
import expresssession from 'express-session';
import indexRoute from './router/indexRoute.js';
import adminRoute from './router/adminRoute.js';
import ejs from 'ejs';

var app = express();
app.set("views","views");
app.set("view engine","ejs");

app.use(expresssession({secret:"mysecretkey",saveUninitialized:true,resave:true}));
app.use(bodyParser.urlencoded({extended:false}));

app.use("/",indexRoute);
app.use("/admin",adminRoute);

app.listen("3000",()=>{
    console.log("Server connection successfull");
});
