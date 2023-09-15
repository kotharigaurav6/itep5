// program showing the concept of mysql with nodejs
var readline = require("readline");
var mysql = require("mysql");
var con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database :"mydb"
});

var instance = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

con.connect((err)=>{
    if(err)
        console.log("Error : "+err);
    else{
        console.log("Connection established sucessfully");
        show_menu();
    }
});

function show_menu(){
    instance.question("\t-------Welcome-------\n\tSelect \n\t1 Add Employer\n\t2 Show Details\n\t3 Update Employer\n\t4 Delete Employer\n\t5 Exit\n Enter code : ",(option)=>{
        switch(option){
            case "1" : addEmployer();
                        break;
            case "2" : showEmployer();
                        break;
            case "3" : updateEmployer();
                        break;
            case "4" : deleteEmployer();
                        break;
            case "5" : 
                     console.log("Visit Again");
                     instance.close();
                     con.end();
                     break;
        }
    });
}
function addEmployer(){
    instance.question("Enter username : ",(username)=>{
        instance.question("Enter email : ",(email)=>{
            instance.question("Enter password : ",(password)=>{
                instance.question("Enter age : ",(age)=>{
                    var str = "insert into employer values(?,?,?,?)";
                    var info = [username,email,password,age];
                    con.query(str,info,(err,message)=>{
                        if(err)
                            console.log("Error : "+err);
                        else{
                            console.log("Employer added successfully");
                            show_menu();
                        }
                    });
                });
            });
        });
    });
}

function showEmployer(){
        instance.question("Enter email : ",(email)=>{
                    var str = "select * from employer where email = ?";
                    var info = [email];
                    con.query(str,info,(err,result)=>{
                        if(err)
                            console.log("Error : "+err);
                        else{
                            //console.log(result);
                            if(result.length==0){
                                console.log("--No Record Found--");
                                show_menu();    
                            }
                            else{
                            console.log("Username : "+result[0].username);
                            console.log("Email : "+result[0].email);
                            console.log("Password : "+result[0].password);
                            console.log("Age : "+result[0].age);
                            show_menu();
                            }
                        }
                    });
        });
}

function updateEmployer(){
    instance.question("Enter email id to update : ",(email)=>{
        instance.question("Enter Username : ",(username)=>{
            instance.question("Enter password : ",(password)=>{
                instance.question("Enter age : ",(age)=>{
                    var str = "update employer set username=?,password=?,age=? where email=?";
                    var info = [username,password,age,email];
                    con.query(str,info,(err,message)=>{
                        if(err)
                            console.log("Error : "+err);
                        else{
                            console.log("Employer updated successfully");
                            show_menu();
                        }
                    });
                });
            });
        });
    });
}

function deleteEmployer(){
    instance.question("Enter email id to delete : ",(email)=>{
                    var str = "delete from employer where email=?";
                    var info = [email];
                    con.query(str,info,(err,message)=>{
                        if(err)
                            console.log("Error : "+err);
                        else{
                            console.log("Employer deleted successfully");
                            show_menu();
                        }
                    });
    });
}
