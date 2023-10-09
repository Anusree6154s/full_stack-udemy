//jshint esversion:6

// Level - 3 Authentication
// Environment Variables

//load Environment Variables
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect("mongodb://127.0.0.1:27017/userDB")
  .then(console.log("connected locally!"));

const secretSchema = { name: String };
const Secret = mongoose.model("secret", secretSchema);
const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

userSchema.plugin(encrypt, {
  secret: process.env.SECRET, // Use the secret key from .env file
  encryptedFields: ["password"],
});

const User = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login", { message: "" });
});

app.get("/register", (req, res) => {
  res.render("register", { message: "" });
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
    password: req.body.password,
  }).then(() => {
    res.render("secrets", { secrets: [{ name: "Jack Bauer is my hero." }] });
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
        const secret = await Secret.find();
        res.render("secrets", { secrets: secret });
      } else {
        res.redirect("/login");
        console.log("Wrong Password!");
      }
    } else {
      res.redirect("/register");
      console.log("Not a registered user.");
    }
  } catch (error) {
    console.error(error);
  }
});

app.post("/submit", async (req, res) => {
  const secretAdded = req.body.secret;
  await Secret.create({ name: secretAdded });
  const data = await Secret.find();
  res.render("secrets", { secrets: data });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
