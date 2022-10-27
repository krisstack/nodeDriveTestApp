require("dotenv").config();
const express = require("express");
const path = require("path");
const app = new express();

const mongoose = require("mongoose");
app.use(express.json());
const expressSession = require("express-session");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const fileupload = require("express-fileupload");
app.use(fileupload());

const PORT = process.env.PORT || 3000;

mongoose.connect(
  "mongodb+srv://Krishnaraj3675:Arathy686@cluster0.chttd.mongodb.net/drivingtest?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.use(
  expressSession({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);
app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});
const ejs = require("ejs");
app.set("view engine", "ejs");
const dashboard = require("./controller/dashboard.js");
const login = require("./controller/login.js");
const signUp = require("./controller/signup.js");
const g2Js = require("./controller/g2Js.js");
const gJs = require("./controller/gJs.js");
//const updateg2 =require('./controller/updateg2.js')
const updateG = require("./controller/updateG.js");
//const postImage1 = require('./controller/postImage1.js')
//const postImage2 =  require('./controller/postImage2.js')
const register = require("./controller/register.js");
const loginUser = require("./controller/loginuser");
const updateg2 = require("./controller/updateg2");
const authMiddleware = require("./middleware/authMiddleware.js");
const slotAdmin = require("./controller/slotAdmin.js");
const appointment = require("./controller/appointment.js");
const slotDate = require("./controller/slotDate.js");
const slotGetDate = require("./controller/slotGetDate");
app.get("/", dashboard);
app.get("/login", login);
app.post("/login/users", loginUser);
app.get("/signup", signUp);
app.get("/g2", g2Js);
app.get("/g", gJs);
app.post("/update/g2", updateg2);
app.post("/:id/update", updateG);
app.post("/register", register);
app.post("/post/appointment", appointment);
//app.post('/post/image1', postImage1)
//app.post('/post/image1', postImage2)
app.get("/slotAdmin", slotAdmin);
app.get("/slotDate", slotDate);
app.get("/slotGetDate", slotGetDate);
