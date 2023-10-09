//jshint esversion:6

// Level - 5 Authentication
// OAuth - Open Authentication

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();

//set express related settings
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//initialise passport for encryption
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//connect mongoose database
mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("connected locally!"));

//make all necessary schemas in database
const secretSchema = mongoose.Schema({ name: String });
const userSchema = mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  secret: [secretSchema],
});

//plugin to encrypt that schema
userSchema.plugin(passportLocalMongoose);

//plugin to use findorcreate
userSchema.plugin(findOrCreate);

//create model of that schema
const User = mongoose.model("user", userSchema);

//serialise deserialise user using passport
passport.use(User.createStrategy());
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

//google authentication (oauth)
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
      scope: ["profile"],
    },
    function (accessToken, refreshToken, profile, cb) {
      // //details od the email id holder
      // console.log(profile);

      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

//start web application
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login", { message: "" });
});

app.get("/register", (req, res) => {
  res.render("register", { message: "" });
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/secrets",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // // Log or store the user data as needed
    // console.log("User data:", req.user);

    res.redirect("/secrets");
  }
);

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect("/");
  });
});

app.get("/submit", async (req, res) => {
  if (req.isAuthenticated()) {
    res.render("submit");
  } else {
    res.redirect("/login");
  }
});

app.get("/secrets", async (req, res) => {
  if (req.isAuthenticated()) {
    const user = await User.findOne({ _id: req.user._id });
    if (user.secret.length === 0) {
      res.render("secrets", {
        secrets: [{ name: "Jack Bauer is my hero." }],
      });
    } else {
      res.render("secrets", { secrets: user.secret });
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
    secret: [],
  });

  passport.authenticate("local", function (err, user, info) {
    if (err) {
      //other errors
      console.error("err: " + err);
      return res.redirect("/login");
    }
    if (!user) {
      //email or password is wrong

      if (info.name === "IncorrectPasswordError") {
        //if only password is wrong
        console.log("message: Incorrect Password");
        return res.render("login", { message: "Incorrect Password" });
      }
      console.log("Not Registered");
      return res.render("register", {
        message: "Not Registered. Please register first.",
      });
    }
    req.logIn(user, function (loginErr) {
      if (loginErr) {
        console.error("loginErr: " + loginErr);
        return res.redirect("/login");
      }

      console.log("Authentication successful");
      return res.redirect("/secrets");
    });
  })(req, res);
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
