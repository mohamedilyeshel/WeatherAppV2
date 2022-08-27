const citiesContainer = document.querySelector(".cities");

class UI {
  static addCurrentWeatherElements(
    { name, countryCode },
    { wind, main, weather }
  ) {
    const cityName = document.querySelector("h3.city");
    const countryName = document.querySelector("h3.country");
    const weatherDesc = document.querySelector("p.descWeather");
    const weatherIcon = document.querySelector(".icon img");
    const weatherTemp = document.querySelector(".footerWeather .temp");
    const weatherFellsLike = document.querySelector(
      ".footerWeather .fellsLike"
    );
    const weatherWind = document.querySelector(".footerWeather .wind");
    const weatherHumidity = document.querySelector(".footerWeather .humidity");
    const weatherPressure = document.querySelector(".footerWeather .pressure");

    cityName.innerText = name;
    countryName.innerText = countryCode;
    weatherDesc.innerText = weather[0].description;
    weatherIcon.setAttribute("src", `../icons/${weather[0].icon}.png`);
    weatherIcon.setAttribute("alt", weather[0].main);
    weatherTemp.innerText = Math.ceil(main.temp) + "°C";
    weatherFellsLike.innerText = Math.ceil(main.feels_like) + "°C";
    weatherHumidity.innerText = main.humidity + "%";
    weatherPressure.innerText = main.pressure + " hPa";
    weatherWind.innerText = Math.ceil(wind.speed * 3.6) + "km/h";
  }

  static removeCitiesList() {
    if (citiesContainer.children.length > 0) {
      citiesContainer.children[0].remove();
    }
  }

  static addCitiesList() {
    const citiesList = document.createElement("ul");
    citiesList.classList.add("citiesList");
    citiesContainer.append(citiesList);
  }

  static addCitiesToList(c, noR = false) {
    if (noR === false) {
      const city = document.createElement("li");
      city.append(c.name + " " + c.countryCode);
      city.classList.add("city");
      citiesContainer.children[0].append(city);
      return city;
    } else {
      citiesContainer.children[0].append("No Result !");
    }
  }
}
