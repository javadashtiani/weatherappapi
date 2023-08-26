
const apiKey = "b805905a521429c60f5fd1395ad14df6";
let input = document.querySelector("#input");
let container = document.querySelector(".container");
input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const content = document.createElement("div");
        content.classList.add("content");
        content.innerHTML = `
        <div class="location">
    <div class="city">${data.name} , ${data.sys.country}</div>
    <div class="date">${showDate()}</div>
  </div>
  <div class="detail">
    <div class="temp">${Math.floor(data.main.temp - 273.15)}°C</div>
    <div class="status">${data.weather[0].main}<i></i></div>
    <div class="level"><span class="min">${Math.floor(
      data.main.temp_min - 273.15
    )}°C</span> / <span class="max">${Math.floor(
          data.main.temp_max - 273.15
        )}°C</span></div>
  </div>
  `;
        container.appendChild(content);
      });
    input.value = "";
    input.focus();
  }
});
function showDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let date = now.getDate();

  return `${day} ${date} ${month} ${year}`;
}
