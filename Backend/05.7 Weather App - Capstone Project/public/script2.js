const check = document.querySelector("button");
const a = document.querySelector(".child-div.a");
const b = document.querySelector(".child-div.b");
const dates = document.querySelector(".date")
const inputs = document.querySelectorAll("input")

capitalizeFirstLetter(inputs)
fillRealtimeDateOptions(dates)

function capitalizeFirstLetter(inputs) {
  for (var i = 0; i < 2; i++) {
    inputs[i].addEventListener('input', (e) => {
      let inputValue = e.target.value;
      inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
      e.target.value = inputValue;
    })
  }
}

function fillRealtimeDateOptions(dates) {
  var currentDate = new Date();
  const currentTime = getFormattedTime(currentDate)
  const roundedTime = roundToNearest3Hours(currentTime)
  setFormattedDateTextContent(dates, currentDate, roundedTime)

  check.addEventListener("click", () => {
    a.classList.add("clicked");
    b.classList.add("appear");

    // const lat = document.querySelector('input[name="lat"]').value;
    // const lon = document.querySelector('input[name="lon"]').value;
    // const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=d58d8653b1204f6eb276e7215f4545ff`;
    //   // window.location.href = `/webpage2?lat=${lat}&lon=${lon}`;

    //   // Make a GET request to the API
    //   fetch(apiUrl)
    //     .then((response) => {
    //       if (response.status === 200) {
    //         return response.json(); // Parse the response as JSON
    //       } else {
    //         throw new Error("Failed to fetch data");
    //       }
    //     })
    //     .then((weatherData) => {
    //       // Access the data from the response
    //       const weatherDataItem = weatherData.data[0];

    //       // Extract the specific data you need
    //       const temp = weatherDataItem.app_temp;
    //       const weather = weatherDataItem.weather.description;
    //       const cloud = weatherDataItem.clouds;
    //       const wind = weatherDataItem.wind_spd;
    //       const rain = weatherDataItem.precip;
    //       const place = weatherDataItem.city_name;
    //       const time = weatherDataItem.ob_time;

    //       setTimeout(() => {
    //       window.location.href = `/webpage2?temp=${temp}&weather=${weather}&cloud=${cloud}&wind=${wind}&rain=${rain}&place=${place}&time=${time}`;
    //   }, 2000);

    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //       // Handle errors here
    //     });
  })
};


function getFormattedTime(currentDate) {
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;
  return currentTime
}

function roundToNearest3Hours(time) {
  const [hours, minutes, seconds] = time.split(':').map(Number);

  // Calculate the total number of seconds
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // Calculate the rounded time in total seconds
  const roundedTotalSeconds = Math.round(totalSeconds / (3 * 3600)) * (3 * 3600);

  // Convert the rounded total seconds back to hours, minutes, and seconds
  const roundedHours = Math.floor(roundedTotalSeconds / 3600);
  const roundedMinutes = Math.floor((roundedTotalSeconds % 3600) / 60);
  const roundedSeconds = roundedTotalSeconds % 60;

  // Format the result
  const roundedTime = `${roundedHours.toString().padStart(2, '0')}:${roundedMinutes.toString().padStart(2, '0')}:${roundedSeconds.toString().padStart(2, '0')}`;

  return roundedTime;
}

function setFormattedDateTextContent(dates, currentDate, formattedTime) {
  for (var i = 0; i <= 4; i++) {
    var nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);
    var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    var formattedDate = nextDate.toLocaleDateString('en-GB', options);
    const parts = formattedDate.split('/')
    const ddmmyyyyDate = parts[0] + '-' + parts[1] + '-' + parts[2]
    dates.options[i].textContent = ddmmyyyyDate

    setFormattedDateValue(dates, i, ddmmyyyyDate, formattedTime)
  }
}

function setFormattedDateValue(dates, i, formattedDate, formattedTime) {
  const parts = formattedDate.split('-')
  const yyyyddmmDate = parts[2] + '-' + parts[1] + '-' + parts[0]
  const formattedDateTime = yyyyddmmDate + ' ' + formattedTime
  dates[i].value = formattedDateTime
}