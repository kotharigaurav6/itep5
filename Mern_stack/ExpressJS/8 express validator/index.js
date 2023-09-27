import express from 'express';
import bodyparser from 'body-parser';
import ejs from "ejs";
import { check, validationResult } from 'express-validator';

var app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
    response.render("contact");
});

app.get("/userData", [
    check('username', 'Enter username'),
    check('email', 'Enter Email').custom((value) => {
        // var reg=/^.......+$/;

    }),
    check('password', 'Enter Password').not().isEmpty().isLength({ max: 10, min: 5 }).withMessage("Password Required"),
    //     check('password').not().isEmpty().isLength({ max: 10, min: 5 }).withMessage("Password Required"),
    // we can also print error message on browser screen form like email required
    check('contact', 'Enter 10-digit contact number')
], (request, response) => {
    var error = validationResult(request);
    if (!error.isEmpty()) {
        console.log(error.errors[0].msg);
       // console.log(error.array());
        
        response.send("Error occured : ");
    }
    else {
        response.send("success");
    }
});
app.listen("3000", () => {
    console.log("Server connection established");
});