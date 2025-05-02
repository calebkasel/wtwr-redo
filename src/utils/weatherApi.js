import {
  apiKey,
  longitude,
  latitude,
  checkResponse,
  weatherOptions,
} from "./constants";

function getWeatherType(temperature) {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}

export const getWeatherForecast = () => {
  const weatherApi = fetch(
    // `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(checkResponse);

  // console.log(weatherApi);
  // console.log(weatherApi.current.temp);

  return weatherApi;
};

const getWeatherCardImage = (condition) => {
  if (condition === "drizzle" || "rain") {
    console.log(weatherOptions.dayRain);
    return weatherOptions.;
  }
};

export function parseWeatherForecast(data) {
  const weather = {};
  weather.city = data.name;
  weather.temp = Math.trunc(data.main.temp);
  weather.type = getWeatherType(weather.temp);
  weather.condition = data.weather[0].main;
  weather.image = getWeatherCardImage(weather.condition);
  return weather;
}

export function parseLocationData(data) {
  return data.name;
}
