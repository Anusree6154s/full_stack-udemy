//jshint esversion:6

// Level - 5 Authentication
//local authentication
//cookies are stored sessions

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

//set express related settings
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Initialize session middleware (passport)
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Secret used to sign session IDs
    resave: false, // Don't save sessions on every request
    saveUninitialized: true, // Save uninitialized sessions
  })
);

app.use(passport.initialize()); // Initialize passport
app.use(passport.session()); // Enable session support for passport

//connect mongoose database
mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("connected locally!"));

//make all necessary schemas in database
const secretSchema = mongoose.Schema({ name: String });
const userSchema = mongoose.Schema({
  email: String,
  password: String,
  secret: [secretSchema],
});

userSchema.plugin(passportLocalMongoose); // Plugin for user authentication with Passport

const User = mongoose.model("user", userSchema);

passport.use(User.createStrategy()); // Set up Passport authentication strategy
passport.serializeUser(User.serializeUser()); // Serialize user session
passport.deserializeUser(User.deserializeUser()); // Deserialize user session

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login", {message:""});
});

app.get("/register", (req, res) => {
  res.render("register", {message:""});
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect("/");
  });
});

app.get("/submit", (req, res) => {
  res.render("submit");
});

app.get("/secrets", async (req, res) => {
  if (req.isAuthenticated()) {
    const user = await User.findOne({ _id: req.user._id });
    if (user) { // Check if user is defined
      if (user.secret.length === 0) {
        res.render("secrets", {
          secrets: [{ name: "Jack Bauer is my hero." }],
        });
      } else {
        res.render("secrets", { secrets: user.secret });
      }
    } else {
      console.log("no user");
    }
  } else {
    res.redirect("/login");
  }
  
});

app.post("/register", (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    (error, user) => {
      if (error) {
        console.log(error);
        return res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/secrets");
        });
      }
    }
  );
});

app.post("/login", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, (err) => {
    if (err) {
      console.log(err);
      return res.redirect("/register");
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/secrets");
      });
    }
  });
});

app.post("/submit", async (req, res) => {
  const secretAdded = req.body.secret;

  try {
    const user = await User.findOne({ _id: req.user._id });
    console.log("user: " + user);
    if (user) {
      user.secret.push({ name: secretAdded });
      await user.save();
      console.log("user.secret: " + user.secret);

      res.redirect("/submit");
    } else {
      console.log("User not found.");
      res.redirect("/secrets");
    }
  } catch (error) {
    console.log("submit error: " + error);
    res.redirect("/submit");
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
