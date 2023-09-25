var express = require("express");
var app = express();

// basic route parameter
// http://localhost:3000/example/123
app.get("/example/:id",(request,response)=>{
    var id = request.params.id;
    response.send(`Your Id : ${id}`);
});

// multiple route parameter
// http://localhost:3000/example/emp123/General
app.get("/example/:id/:category",(request,response)=>{
    var id = request.params.id;
    var category = request.params.category;
    response.send(`Your Id : ${id} and category is : ${category}`);
});

// optional route parameter
// http://localhost:3000/example/andrew%20anderson
app.get("/example/:name?",(request,response)=>{
    var name = request.params.name || 'John Deo';
    response.send(`Your name is : ${name}`);
});

// checks route with the regex
// http://localhost:3000/exampledemo/123jlkj
app.get("/exampledemo/:empid",(request,response)=>{
    var empid = request.params.empid;
    var empidRegex = /^[0-9A-Za-z_]+$/;
    if(empid.match(empidRegex))
        response.send(`Employer Id : ${empid}`);
    else
        response.send("Not matched");
});

// route with regex
// http://localhost:3000/demoexample/123jlkj
app.get("/demoexample/:empid(\\d+)",(request,response)=>{
     var empid = request.params.empid;
        response.send(`Employer Id : ${empid}`);
});

//wildcard route
app.get("/example_demo/*",(request,response)=>{
    var imagename = request.params[0];
       response.send(`image name : ${imagename}`);
});

app.listen("3000",()=>{
    console.log("Server connection successfull");
});