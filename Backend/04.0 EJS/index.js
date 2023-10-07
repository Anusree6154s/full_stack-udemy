import express from "express";

var app = express();
var port = 3000;

app.get("/", (req, res) => {
  let day, action, today;
  today = new Date().getDay();

//   Test code
//   weekend:
//   var customDate = new Date("June 24, 2023 11:13:00");
//   today = customDate.getDay();
//   weekday:
//   new Date("June 20, 2023 11:13:00");
//   today = customDate.getDay();

  console.log(today);
  if (today == 0 || today == 6) {
    day = "the weekend";
    action = "have fun";
  } else {
    day = "a weekday";
    action = "work hard";
  }

  res.render("index.ejs", {
    day: day,
    action: action,
  });
});

app.listen(port);
