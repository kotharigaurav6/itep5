// renaming a file

var fs = require("fs");
fs.rename("demo.txt","rename_demo.txt",(error)=>{
    if(error)
        console.log("No such file or directory");
    else
        console.log("File is renamed");
});