const searchInput = document.querySelector(".searchCities");

// Event listeners
searchInput.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    UI.removeCitiesList();
    UI.showCitiesList();
    const data = await City.getCities(searchInput.elements.cityName.value, 5);
    if (data !== false) {
      for (let c of data.data) {
        const city = UI.addCitiesToList(c);
        city.addEventListener("click", async (e) => {
          try {
            const currentWeather = await Weather.getCurrentWeather(c);
            UI.addCurrentWeatherElements(c, currentWeather);

            const futurWeather = await Weather.getFuturWeather(c);
            const arr = Array.from(futurWeather.list);
            const forcastDays = [];
            for (let i = 0; i < 5; i++) {
              forcastDays.push(arr.splice(7, 8)[0]);
            }
            UI.removeDaysList();
            UI.addForcastWeather(forcastDays);

            UI.removeCitiesList();
            searchInput.elements.cityName.value = e.target.innerText;
          } catch (err) {
            console.log(err);
          }
        });
      }
    } else {
      UI.addCitiesToList({}, true);
    }
  } catch (err) {
    console.log(err);
  }
});
