const check = document.querySelector("button");
const a = document.querySelector(".child-div.a");
const b = document.querySelector(".child-div.b");
check.addEventListener("click", () => {
  a.classList.add("clicked");
  b.classList.add("appear");

  const lat = document.querySelector('input[name="lat"]').value;
  const lon = document.querySelector('input[name="lon"]').value;
  const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=d58d8653b1204f6eb276e7215f4545ff`;
    // window.location.href = `/webpage2?lat=${lat}&lon=${lon}`;

    // Make a GET request to the API
    fetch(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          return response.json(); // Parse the response as JSON
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .then((weatherData) => {
        // Access the data from the response
        const weatherDataItem = weatherData.data[0];

        // Extract the specific data you need
        const temp = weatherDataItem.app_temp;
        const weather = weatherDataItem.weather.description;
        const cloud = weatherDataItem.clouds;
        const wind = weatherDataItem.wind_spd;
        const rain = weatherDataItem.precip;
        const place = weatherDataItem.city_name;
        const time = weatherDataItem.ob_time;

        setTimeout(() => {
        window.location.href = `/webpage2?temp=${temp}&weather=${weather}&cloud=${cloud}&wind=${wind}&rain=${rain}&place=${place}&time=${time}`;
    }, 2000);

      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });
  

  // // Read the latitude and longitude values from the input fields
  // const lat = document.querySelector('input[name="lat"]').value;
  // const lon = document.querySelector('input[name="lon"]').value;

  // setTimeout(() => {
  //     // Send an AJAX request to the server to change the page
  //     fetch(`/submit?lat=${lat}&lon=${lon}`).then((response) => {
  //         if (response.status === 200) {
  //             window.location.href = `/webpage2`;
  //         }
  //     });
  // }, 2000); // Adjust the time based on your animation duration
});
