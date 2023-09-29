import connectInstance from '../model/connection.js';

export const adminViewUserController = (request, response) => {
    var sql = "select * from user";
    connectInstance.query(sql, (err, result) => {
        if (err)
            console.log("error while fetching user data");
        else {
            response.render("adminviewuser", { userrecord: result, adminemail: request.session.adminemail });
        }
    });
}

export const adminLogoutController = (request, response) => {
    request.session.adminemail = "";
    request.session.destroy();
    response.redirect("/");
}

export const adminUpdateUserController = (request, response) => {
    const email = request.params.email;
    var sql = `select * from user where email="${email}"`;
    // console.log(connectInstance);
    connectInstance.query(sql, (err, result) => {
        if (err)
            console.log("error while fetching data");
        else {
            response.render("adminUpdateUser", { adminemail: request.session.adminemail, result:result[0]});
        }
    });
}

export const adminUpdateDataController = (request, response) => {
    const { username, email, password, address } = request.body;
    var sql = `update user set username="${username}",password="${password}",address="${address}" where email="${email}"`;
   // console.log(connectInstance);
    connectInstance.query(sql, (err, result) => {
        if (err)
            console.log("error while updating data");
        else {
            console.log("Data updated successfully");
            response.render("adminhome",{adminemail:request.session.adminemail});
        }
    });
}

export const adminDeleteUserController = (request, response) => {
    const email = request.params.email;
    var sql = `delete from user where email="${email}"`;
   // console.log(connectInstance);
    connectInstance.query(sql, (err, result) => {
        if (err)
            console.log("error while updating data");
        else {
            console.log("Data deleted successfully");
            /* user list start */
            var sql = "select * from user";
            connectInstance.query(sql, (err, result) => {
                if (err)
                    console.log("error while fetching user data");
                else {
                    response.render("adminviewuser", { userrecord: result, adminemail: request.session.adminemail });
                }
            });
            /* user list end */
        }
    });
}
