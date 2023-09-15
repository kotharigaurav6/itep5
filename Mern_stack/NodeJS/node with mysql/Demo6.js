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
        // var str = "insert into student(name,email,per) values('Andrew Anderson','andrew@gmail.com',67.78)";
        
        //var str = "insert into student values(500,'Andrew Anderson','andrew@gmail.com',67.78)";
        var str = "select * from student";
        con.query(str,(err,result)=>{
            if(err)
                console.log("Error : "+err);
            else
                console.log("Data Inserted successfully");     
//console.log("Result ", result);     
//console.log("Result ", result[0]);     
  
        });
    }
    con.end();
});