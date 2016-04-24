import {
  WEATHER_URI,
  WEATHER_QUERY,
  WEATHER_TOKEN,
} from './constants';

function getWeather(searchKey) {
  const url = `${WEATHER_URI}${WEATHER_QUERY}${searchKey}&appid=${WEATHER_TOKEN}`;
  const request = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    request.open('GET', url, true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        resolve(JSON.parse(request.response));
      }
    };

    request.onerror = () => {
      reject(new Error('Error fetching posts'));
    };

    request.send();
  });
}

const API = { getWeather };

export default API;
