var bodyparser = require("body-parser"); // for post method
var express = require("express");
var ejs = require("ejs");
var url = require("url");
var expresssession = require("express-session");
var app = express();
app.set("views", "views");
app.set("view engine", "ejs");

app.use(expresssession({ secret: 'itsmysecretkey', saveUninitialized: true, resave: true }));
app.use(bodyparser.urlencoded({extended:false})); // for post method

app.get("/", (request, response) => {
    response.render("index", { msg: "", email: "" });
});
app.get("/login", (request, response) => {
    response.render("login", { message: "", msg: "", email: "" });
});
var sess;
/* for get method  | start*/

// app.get("/viewInfo", (request, response) => {
//     var requestedUrl = url.parse(request.url, true).query;
//     if (requestedUrl.email == "andrew@gmail.com" && requestedUrl.password == "andrew@123") {
//         console.log(request.session);
//         /*
//         Session {
//             cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
//             }
//         */
//         sess = request.session;
//         sess.email = requestedUrl.email;
//         request.session.save();
//         console.log(request.session);
//         //            response.render("welcome",{email : sess.email});
//         response.render("index", { email: sess.email, msg: "" });

//     } else {
//         response.render("login", { message: "Email-Id or Password is wrong ", msg: "", email: "" });
//     }
// });

/* for get method  | end*/

/* for post method | start */
app.post("/viewInfo", (request, response) => {
    var requestedUrl = request.body;
    if (requestedUrl.email == "andrew@gmail.com" && requestedUrl.password == "andrew@123") {
        console.log(request.session);
        /*
        Session {
            cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
            }
        */
        sess = request.session;
        sess.email = requestedUrl.email;
        request.session.save();
        console.log(request.session);
        //            response.render("welcome",{email : sess.email});
        response.render("index", { email: sess.email, msg: "" });

    } else {
        response.render("login", { message: "Email-Id or Password is wrong ", msg: "", email: "" });
    }
});

/* for post method | end */

app.get("/logout", (request, response) => {
    request.session.email = '';
    request.session.destroy(function (err) {
        if (err)
            response.render("index", { msg: "", email: "" });
        else
            response.render("index", { msg: "Logout Successully", email: "" });
    });
});


app.listen("3000", () => {
    console.log("Server connection successfull");
});