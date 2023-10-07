import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", async (req, res) => {
  const lat = req.body.lat;
  const lon = req.body.lon;
  try {
    const result = await axios.get(
      `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=d58d8653b1204f6eb276e7215f4545ff`
    );
    const weatherDataItem = result.data.data[0]; // Access the first data point

    // Extract the specific data you need
    const temp = weatherDataItem.app_temp;
    const weather = weatherDataItem.weather.description;
    const cloud = weatherDataItem.clouds;
    const wind = weatherDataItem.wind_spd;
    const rain = weatherDataItem.precip;
    const place = weatherDataItem.city_name;
    const time = weatherDataItem.ob_time;

    res.redirect(
      `/webpage2?temp=${temp}&weather=${weather}&cloud=${cloud}&wind=${wind}&rain=${rain}&place=${place}&time=${time}`
    );
  } catch (error) {
    console.log(error.message);
    res.status(404).send("Error fetching weather data.");
  }
});


app.get("/webpage2", (req, res) => {
  // Render the new page
  const temp = req.query.temp;
  const weather = req.query.weather;
  const cloud = req.query.cloud;
  const wind = req.query.wind;
  const rain = req.query.rain;
  const place = req.query.place;
  const time = req.query.time;

  res.render("webpage2.ejs", {
    temp: temp,
    weather: weather,
    cloud: cloud,
    wind: wind,
    rain: rain,
    place: place,
    time: time,
  });
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});



//Latitudes and Longitudes to be entered are:
// latitutde = 35.7796
// longitude = -78.6382

//website to get the key is: https://www.weatherbit.io/account/dashboard