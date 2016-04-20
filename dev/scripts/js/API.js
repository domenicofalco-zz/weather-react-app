import { BASE_URI, QUERY, TOKEN } from './constants';

function getWeather(searchKey) {

  const url = `${BASE_URI}${QUERY}${searchKey}&appid=${TOKEN}`;
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
