export default currentWeather => {
  // DOM
  const $weatherInfoIcon = document.querySelector('.weather-info-icon');
  const $weatherCelsius = document.querySelector('.weather-celsius');
  const $weatherLocation = document.querySelector('.weather-location');
  const $weatherIconPopup = document.querySelector(
    '.weather-popup-status-icon'
  );
  const $weatherCelsiusPopup = document.querySelector(
    '.weather-popup-status-celsius'
  );
  const $weatherLocationPopup = document.querySelector(
    '.weather-popup-dest-location'
  );
  const $weatherInfoPopup = document.querySelector('.weather-popup-dest-info');
  const imgURL = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
  const temperature = `${Math.floor(currentWeather.main.temp)}℃`;
  const location = currentWeather.name;

  $weatherInfoIcon.setAttribute('src', imgURL);
  $weatherCelsius.textContent = temperature;
  $weatherLocation.textContent = location;
  $weatherIconPopup.setAttribute('src', imgURL);
  $weatherCelsiusPopup.textContent = temperature;
  $weatherLocationPopup.textContent = location;
  $weatherInfoPopup.textContent = currentWeather.weather[0].description;
};
