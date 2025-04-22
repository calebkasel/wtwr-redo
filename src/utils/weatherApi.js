import { apiKey, longitude, latitude, checkResponse } from "./constants";

// if (temperature >= 86) {
//     return 'hot';
//   } else if (temperature >= 66) {
//     return 'warm';
//   } else {
//     return 'cold';
//   }

export const getWeatherForecast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`
  ).then(checkResponse);

  console.log(weatherApi);
  // console.log(weatherApi.current.temp);

  return weatherApi;
};

export function parseWeatherForecast(data) {
  const temp = data.current.temp
}

export function parseLocationData(data) {
  return data.name;
}
