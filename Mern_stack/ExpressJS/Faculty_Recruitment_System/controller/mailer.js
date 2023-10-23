import nodemailer from "nodemailer";
var mailer = function(mailContent,email,callback){
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