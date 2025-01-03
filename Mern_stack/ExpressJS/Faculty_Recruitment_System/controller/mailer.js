import nodemailer from "nodemailer";
var mailer = function(mailContent,email,callback){
    var transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user : "your_email@gmail.com",
            pass : "your_password"
        }
    });
    var mailOption = {
        from: "your_email@gmail.com",
        to:email,
        subject:"Verification Mail By Programming Stairs",
        html:mailContent
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
