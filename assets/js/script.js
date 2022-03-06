// //display date under heading
// $("#today").text(moment().format("MMMM Do, YYYY h:mm A z"));

// // //variables
// let apiKey = "c8bf9352a7fc31b88f1966db48bcdf4f";

// //make API call
// function fetchCurrent() {
//   const lat = 41.85;
//   const lon = -87.65;
//   const fetchUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=${apiKey}`;

//   fetch(fetchUrl)
//     .then(function (resp) {
//       return resp.json();
//     }) // Convert data to json
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function () {
//       // catch any errors
//     });
// }

// //load weather upon initialization
// window.onload = function () {
//   fetchCurrent();
// };
