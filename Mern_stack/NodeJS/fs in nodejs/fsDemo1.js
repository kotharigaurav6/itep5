// program

var fs = require("fs");
// fs.open("demo.txt",'w',()=>{
//     console.log("File created successfully");
// });

fs.open("demo.txt",'wx',(error)=>{
    if(error)
        console.log("Already exist : "+error);
    else
        console.log("File created successfully");
});