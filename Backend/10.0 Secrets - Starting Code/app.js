//jshint esversion:6

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const encrypt = require ("mongoose-encryption");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect("mongodb://127.0.0.1:27017/userDB")
  .then(console.log("connected locally!"));

// const secretSchema = { secret: String };
// const Secret = mongoose.model("secret", secretSchema);
const userSchema = mongoose.Schema ({
  email: String,
  password: String
});

// console.log(process.env.API_KEY);
userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]});

const User = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/logout", (req, res) => {
  res.redirect("/login");
});

app.get("/submit", (req, res) => {
  res.render("submit");
});

app.post("/register", (req, res) => {
  User.create({
    email: req.body.username,
    password: req.body.password
  }).then(() => {
    console.log(req.body.username + " " + req.body.password);
    res.render("secrets");
  });
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // CAN ALSO BE WRITTEN AS
  // const { username, password } = req.body;

  try {
    const data = await User.findOne({ email: username });
    if (data) {
      if (password === data.password) {
        res.render("secrets");
      } else {
        res.send("Wrong Password!");
      }
    } else {
      res.send("Not a registered user.");
    }
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/submit", async (req, res) => {
  // const secrettext = req.body.secret;
  // await Secret.create({ secret: secrettext });
  res.render("secrets");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
