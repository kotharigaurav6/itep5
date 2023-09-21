var express = require("express");
var app = express();
var ejs = require("ejs");

app.set("views","views");
app.set("view engine","ejs");

const bookDetails = [
    {
        bookName : "Programming in C",
        author : "Dennis Ritchie",
        price : "USD 50"
    },
    {
        bookName : "Programming in C++",
        author : "Bjarne Stroustrup",
        price : "USD 100"
    },
    {
        bookName : "Programming in Java",
        author : "James Gosling",
        price : "USD 150"
    }
];
app.get("/",(request,response)=>{
//    response.render("page3",{bookDetails:bookDetails});
response.render("page3",{bookDetails});
});
app.listen("3000",()=>{
    console.log("server connection successfull");
});
