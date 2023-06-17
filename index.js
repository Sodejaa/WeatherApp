const apiKey = "04848458b53961ffe7eda25aed5dba34";
const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}";

const card = document.querySelector(".card");
const searchbox = document.querySelector(".searchbox button");

searchbox.addEventListener("click", () => {
  searchWeatherData();
});

document.querySelector(".searchbox input").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchWeatherData();
  }
});

function searchWeatherData() {
  const city = document.querySelector(".searchbox input").value;

  if (city === "" || 404) {
    card.classList.remove("visible");
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  const { name } = data;
  const { temp, humidity } = data.main;
  const { icon, description } = data.weather[0];
  const { speed } = data.wind;

  console.log(name, temp, humidity, icon, description, speed);

  document.querySelector(".location").innerText = name;
  document.querySelector(".temperature").innerText = `${temp}°C`;
  document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
  document.querySelector(".description").innerHTML = description;
  document.querySelector(".wind span").innerHTML = `${speed} km/h`;
  document.querySelector(".humidity span").innerHTML = `${humidity}%`;
  document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${description}')`;

  if (name) {
    card.classList.add("visible");
  } else {
    card.classList.remove("visible");
  }
}
