// program (Asynchronous)

var fs = require("fs");
console.log("Before Execution");
fs.readFile("demo.txt",'utf-8',(error,data)=>{
    if(error)
        console.log("Error while dealing with a file");
    else
        //console.log(data.toString());
        //console.log(""+data);
        console.log(data);
});
console.log("After Execution");
