class City {
  static async getCities(cityName, limit) {
    try {
      const res = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityName}&limit=${limit}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "db1220fbe4msh801012b8824aea0p131a73jsnfce2ee481e44",
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );

      const data = await res.json();
      if (data.data.length > 0) {
        return data;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
