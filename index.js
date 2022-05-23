

const API_KEY = "962f8b6b6cfad0728c32939691af7250";
let lat;
let lon;
let city;
let weatherImg;

const temp = document.querySelector("#temp");
const icon = document.querySelector("img");

icon.style.display = "none";
document.querySelector(".btn-group").addEventListener("click", (e) => {
  if (e.target.getAttribute("type") === "button")
    city = e.target.getAttribute("id");
  else return;

  axios(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`)
    // .then(response => response.json())
    .then(response => {
      lat = response.data[0].lat;
      lon = response.data[0].lon;
    })
    .then(() => {
      axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        // .then(response => response.json())
        .then(response => {
          weatherImg = response.data.weather[0].icon;
          temp.innerText = `온도 : ${Math.round(response.data.main.temp - 273.15)}`;
          icon.style.display = "block";
          icon.src = `http://openweathermap.org/img/wn/${weatherImg}@2x.png`;
        });
    })
});

// fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${id}&limit=5&appid=${API_KEY}`)
//   .then(response => response.json())
//   .then(data => console.log(data[0].lat, data[0].lon));

// document.getElementById("seoul_btn").addEventListener("click", () => {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//     });
// });