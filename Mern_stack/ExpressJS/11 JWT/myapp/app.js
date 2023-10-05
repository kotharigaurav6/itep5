import express from 'express';
import crypto from 'crypto';
import jwt from "jsonwebtoken";
import cookieparser from 'cookie-parser';
//import randomstring from 'randomstring';

var app = express();
const SECRET_KEY = crypto.randomBytes(32).toString('hex');
app.set("view engine","ejs");
app.set("views","views");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieparser());
app.get("/login",(request,response)=>{
      response.render("index");  
});
app.post("/login",(request,response)=>{
    const {email,password} = request.body;
    const role = "";
    const user = {};
    if(email=="admin@gmail.com" && password=="admin@123"){
        user.role = "admin";
        user.email = email;
        user.password = password;
    }
    else{
        user.role = "user";
        user.email = email;
        user.password = password;
    }
   // const SECRET_KEY = randomstring.generate(10);
   // console.log(SECRET_KEY);
   // we can also pass user object if we want to send the complete object data, but if we needs to pass some selected data then in that case we can create customize object 
    const payload = {
        email : user.email,
        password : user.password,
        role : user.role
     //   check:true // simply to check whether it is going to pass or not
    };
    const expiryTime = {
        expiresIn : '1d'
    }
    const token = jwt.sign(payload,SECRET_KEY,expiryTime);
    response.cookie('jwt',token,{httpOnly:true});
    if(!token){
        response.json({message : "Error Occured while dealing with Token"});
    }
    response.redirect("/profile");
});

const authenticateJWT = (request,response,next)=>{
    const token = request.cookies.jwt;
    //console.log(token); 
    if(!token){
        response.json({message : "Error Occured while dealing with Token inside authenticateJWT"});
    }
    jwt.verify(token,SECRET_KEY,(err,payload)=>{
        if(err)
         response.json({message : "Error Occured while dealing with Token during verify"});
        request.payload = payload;
        //console.log(payload);
        next();
    });
}
const authorizeUser = (request,response,next)=>{
    //console.log(request.payload);
    if(request.payload.role=="admin")
        response.render("admin");
    else if(request.payload.role=="user")
        response.render("user");
    next();
}
app.get("/profile",authenticateJWT,authorizeUser,(request,response)=>{
   console.log("Task Complete");
});


app.listen("3000",()=>{
    console.log("Server connection successfull");
});