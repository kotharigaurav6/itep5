// program showing the concept of mysql with nodejs

var mysql = require("mysql");
var con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root"
});

con.connect((err)=>{
    if(err)
        console.log("Error : "+err);
    else{
        console.log("Connection Established Successfully");
        var str = "create database mydb1";
        con.query(str,(err,result)=>{
            if(err)
                console.log("Error : "+err);
            else
                console.log(result);
        });
    }
});