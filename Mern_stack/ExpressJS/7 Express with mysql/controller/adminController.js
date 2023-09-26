import connectInstance from '../model/connection.js';

export const adminViewUserController = (request, response) => {
    var sql = "select * from user";
    connectInstance.query(sql,(err, result) => {
        if (err)
            console.log("error while fetching user data");
        else {
            response.render("adminviewuser",{userrecord : result,adminemail:""});
        }
    });
}


export const adminLogoutController = (request, response) => {
                request.session.adminemail = "";
                request.session.destroy();
                response.redirect("/");
    }
