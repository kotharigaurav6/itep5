// removing a file or delete a file

var fs = require("fs");
fs.unlink("demo1sdfsdf.txt",(error)=>{
    if(error)
        console.log("No such file or directory");
    else
        console.log("File deleted successfully");
});