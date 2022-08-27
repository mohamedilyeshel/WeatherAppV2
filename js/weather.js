class Weather {
  static async getCurrentWeather({ latitude, longitude }) {
    try {
      const res = await fetch(
        `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=968f5f67b79212174b73cbede625d257&units=metric`,
        {
          method: "GET",
        }
      );

      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  static async getFuturWeather({ latitude, longitude }) {
    try {
      const res = await fetch(
        `//api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=968f5f67b79212174b73cbede625d257&units=metric`,
        {
          method: "GET",
        }
      );

      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
