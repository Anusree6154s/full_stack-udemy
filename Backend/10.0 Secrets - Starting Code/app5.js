//jshint esversion:6

// Level - 5 Authentication
// Hashing and salting

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // Library for password hashing

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect("mongodb://127.0.0.1:27017/userDB") // Connect to the MongoDB database
  .then(console.log("connected locally!")); // Log connection success message

const secretSchema = { name: String };
const Secret = mongoose.model("secret", secretSchema);
const userSchema = mongoose.Schema({
  email: String,
  password: String, // storing hashed passwords
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

app.get("/submit", async (req, res) => {
  res.render("submit");
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const data = await User.findOne({ email: username }); //.find isnt working here dont know why
  try {
    if (data) {
      // User with the same username (email) already exists, handle this case
      res.send("This email already exists");
      console.log("existing data: " + data);
    } else {
      // Hash and salt the password before storing it
      bcrypt.hash(password, 1, function (err, hash) {
        User.create({
          email: username,
          password: hash, // Store the hashed password in the database
        });
        User.find({ email: username }).then((data) => {
          console.log("data: " + data);
          res.render("secrets", {
            secrets: [{ name: "Jack Bauer is my hero." }],
          });
        });
        if (err) {
          console.log("register err: " + err);
          res.send(err);
        }
      });
    }
  } catch (error) {
    res.send(err);
    console.log("finding err: " + error);
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const data = await User.findOne({ email: username });
    if (data) {
      bcrypt.compare(password, data.password, async function (err, result) {
        if (result) {
          console.log("compare: " + result);
          const secret = await Secret.find();
          res.render("secrets", { secrets: secret });
        } else {
          console.log("Wrong Password");
          res.redirect("/login");
        }
        if (err) {
          console.log(err);
        }
      });
    }
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/submit", async (req, res) => {
  const secret = req.body.secret;
  await Secret.create({ name: secret });
  const data = await Secret.find();
  console.log("submit data: " + data);
  res.render("secrets", { secrets: data });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
