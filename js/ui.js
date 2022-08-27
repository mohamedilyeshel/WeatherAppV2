const citiesContainer = document.querySelector(".citiesList");
const currentWeatherContainer = document.querySelector(".currentWeather");
const daysContainer = document.querySelector(".days");
const fullDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

class UI {
  static removeDaysList() {
    if (daysContainer.children.length > 0) {
      daysContainer.innerHTML = "";
    }
  }

  static addForcastWeather(forcastDays) {
    for (let f of forcastDays) {
      const dayName = fullDays[new Date(f.dt_txt).getDay()];
      const day = document.createElement("div");
      day.classList.add("day");
      day.innerHTML = `
      <div class="dayInfo">
        <div class="icon">
          <img src="../icons/${f.weather[0].icon}.png" alt="${
        f.weather[0].main
      }" />
        </div>
        <p class="dayName">${dayName}</p>
      </div>
      <div class="dayWeather">
        <span class="descWeather">${f.weather[0].description}</span>
        <span class="tempWeather">${Math.ceil(f.main.temp)}°C</span>
      </div>
    </div>
    `;
      daysContainer.append(day);
    }
  }

  static addCurrentWeatherElements(
    { name, countryCode },
    { wind, main, weather }
  ) {
    currentWeatherContainer.innerHTML = `
    <header class="headerWeather">
      <div class="location">
        <h3 class="city title">${name}</h3>
        <h3 class="country title">${countryCode}</h3>
        <p class="descWeather">${weather[0].description}</p>
      </div>
      <div class="icon">
        <img src="../icons/${weather[0].icon}.png" alt="${weather[0].main}" />
      </div>
    </header>
    <footer class="footerWeather">
      <p class="temp">${Math.ceil(main.temp)}°C</p>
      <div class="moreInfos">
        <p class="infos">Details</p>
        <div class="infos">
          <p>Feels Like</p>
          <p class="fellsLike">${Math.ceil(main.feels_like)}°C</p>
        </div>
        <div class="infos">
          <p>Wind</p>
          <p class="wind">${Math.ceil(wind.speed * 3.6)}km/h</p>
        </div>
        <div class="infos">
          <p>Humidity</p>
          <p class="humidity">${main.humidity}%</p>
        </div>
        <div class="infos">
          <p>Pressure</p>
          <p class="pressure">${main.pressure} hPa</p>
        </div>
      </div>
    </footer>
    `;
  }

  static showCitiesList() {
    citiesContainer.classList.remove("hide");
  }

  static removeCitiesList() {
    if (citiesContainer.children.length > 0) {
      citiesContainer.innerHTML = "";
      citiesContainer.classList.add("hide");
    }
  }

  static addCitiesToList(c, noR = false) {
    if (noR === false) {
      const city = document.createElement("li");
      city.append(c.name + " " + c.countryCode);
      city.classList.add("city");
      citiesContainer.append(city);
      return city;
    } else {
      citiesContainer.innerHTML = "<span>No Result !</span>";
      console.log(citiesContainer.children.length);
    }
  }
}
