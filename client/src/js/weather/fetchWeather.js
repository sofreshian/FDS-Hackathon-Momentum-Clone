import render from './renderWeather';

const axios = require('axios');

export default () => {
  // Getting a current location's latitude and longitude
  async function displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ad3ce5cf700eefbe4eecc86bd0c2f60c`;

    try {
      const res = await axios.get(weatherURL);
      const currentWeather = res.data;

      render(currentWeather);
    } catch (err) {
      console.error(err);
    }
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
  }
};
