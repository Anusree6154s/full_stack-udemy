//index2.js as a documentation for my personal use of the original code index.js

import express from "express";
import bodyParser from "body-parser";
import axios from "axios"; //import axios

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    //trycatch axios get for a random activity to be displayed when th epage loads first time
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    res.render("index.ejs", { data: response.data });
  } catch (error) {
    res.render("index.ejs", {error: error.message,});
  }
});

app.post("/", async (req, res) => {
    //trycatch axios to get the same page upon choosing an activity and participant number
  try {
    const type = req.body.type;
    const participants = req.body.participants;
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
    const randomActivity = response.data[Math.floor(Math.random() * response.data.length)]; //to choose one activity among the array of  data that comes upon filtering the desired acitvity and participants number
    res.render("index.ejs", {data:randomActivity});
  } catch (error) {
    res.render("index.ejs", { error: "No activities that match your criteria." });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
