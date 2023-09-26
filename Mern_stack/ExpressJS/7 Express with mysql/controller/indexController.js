import connectInstance from '../model/connection.js';

export const indexAddController = (request, response) => {
    const { username, email, password, address } = request.body;
    var sql = "insert into user(username,email,password,address) values(?,?,?,?)";
    var values = [username, email, password, address];
    console.log(connectInstance);
    connectInstance.query(sql, values, (err, result) => {
        if (err)
            console.log("error while inserting data");
        else {
            console.log("Data inserted successfully");
            response.render("login",{email:""});
        }
    });
}

export const indexCheckController = (request, response) => {
    const {email, password} = request.body;
    if(email=="admin@gmail.com" && password=="admin@123"){
        request.session.adminemail = email;
        request.session.save();
        response.render("adminhome",{adminemail : request.session.adminemail});
    }else{
    var sql = "select * from user where email=? and password=?";
    var values = [email, password];
    console.log(connectInstance);
    connectInstance.query(sql, values, (err, result) => {
        if (err)
            console.log(err);
        else {
            if(result.length==0)
                response.render("login",{email:""});
            else{
                console.log("Login successfully");    
                request.session.email = email;
                request.session.save();
                response.render("home",{email : email});
            }
        }
      });
    }
}

export const indexUpdateFormController = (request,response)=>{
    var email = request.session.email;
    var sql = `select * from user where email = "${email}"`;
    connectInstance.query(sql,(err,result)=>{
        response.render("updateform",{email:email,result:result[0]});        
    });
}

export const indexUpdateDataController = (request, response) => {
    const { username, email, password, address } = request.body;
    var sql = `update user set username="${username}",password="${password}",address="${address}" where email="${email}"`;
   // console.log(connectInstance);
    connectInstance.query(sql, (err, result) => {
        if (err)
            console.log("error while updating data");
        else {
            console.log("Data updated successfully");
            response.render("home",{email:email});
        }
    });
}

export const indexLogoutController = (request, response) => {
                request.session.email = "";
                request.session.destroy();
//                response.render("index",{email : ""});
            response.redirect("/");
}
