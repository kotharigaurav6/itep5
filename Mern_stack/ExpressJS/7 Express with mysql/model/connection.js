import mysql from 'mysql';
var connectInstance = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"expressdb"
});

connectInstance.connect(function(err){
    if(err){
        console.log("database error : "+err);
        return err;
    }
    else    
        console.log("Connection Established");
});

export default connectInstance;