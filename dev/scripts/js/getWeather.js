import API from './API';
import LocalStorage from './localStorage.js';

let weatherState;

function getDataFromAPI(city, updateWeatherState) {
  API.getWeather(city).then((data) => {
    weatherState = {
      city: data.name,
      country: data.sys.country,
      status: data.weather[0].main,
    };
    LocalStorage.setItem('cities', weatherState.city);
  }).catch(() => {
    // in order to show the error message
  });

  return weatherState;
}

const GetWeather = { getDataFromAPI };

export default GetWeather;
