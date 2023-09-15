// program showing the concept of mysql with nodejs

var mysql = require("mysql");
var con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database :"mydb"
});

con.connect((err)=>{
    if(err)
        console.log("Error : "+err);
    else{
        console.log("Connection Established Successfully");
        var str = "create table student2(rno int auto_increment primary key,name varchar(45) not null,email varchar(45) not null, per double default 0 not null)";
        con.query(str,(err,result)=>{
            if(err)
                console.log("Error : "+err);
            else
                console.log("Table created successfully");     
        });
    }
    con.end();
});