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
            response.render("login");
        }
    });
}