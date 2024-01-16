import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import countries from './country-code.js';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/submit", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
  const city = req.body.city;
  const country = req.body.country;
  const date = req.body.date;

  //find countrycode
  const foundCountry = countries.find(item => item.country == country)
  const code = foundCountry.code

  //enter city and countrycode using geocoder
  const response = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city},${code}&appid=843d37c1dd0d39ffe4b87de9a2ebdc95`
  );
  const lat = response.data[0].lat
  const lon = response.data[0].lon

  //enter lat and lon using weatherAPI
  const result = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=843d37c1dd0d39ffe4b87de9a2ebdc95&units=metric`
  );

  const weatherData = result.data.list.find(item => item.dt_txt == date)

  res.render("webpage2.ejs", {
    icon: weatherData.weather[0].icon,
    temp: weatherData.main.temp,
    weather: weatherData.weather[0].description,
    humidity: weatherData.main.humidity,
    cloud: weatherData.clouds.all,
    wind: weatherData.wind.speed,
    visibility: weatherData.visibility
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});