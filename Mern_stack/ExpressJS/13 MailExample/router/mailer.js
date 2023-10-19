import nodemailer from "nodemailer";
var mailer = function(email,callback){
    var transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user : "onlinespareparts2019@gmail.com",
            pass : "arlzkwacuuwocxrj"
        }
    });
    var mailOption = {
        from: "onlinespareparts2019@gmail.com",
        to:email,
        subject:"Verification Mail By Programming Stairs",
        html:"Hello "+email+",<br>Welcome to Programming Stairs. It's a <b>Verification Mail</b> from <b>Programming Stairs</b>.<br><br>Please Click on the below <b>Link</b> to Verify.<br> <a href='http://localhost:3000/verifyemail?email="+email+"'>Click Here to Verify</a>"
    };
    transporter.sendMail(mailOption,(err,info)=>{
        if(err)
            console.log("Error while sending email in mailer.js : "+err);
        else{
            console.log("Mail sent successfully(mailer.js)");
            callback(info);
        }
    });
}

export default {mailer:mailer};