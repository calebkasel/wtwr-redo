import daySunny from "../assets/day/sunny.svg";
import nightClear from "../assets/night/clear.svg";
import dayCloudy from "../assets/day/cloudy.svg";
import nightCloudy from "../assets/night/cloudy.svg";
import dayFog from "../assets/day/fog.svg";
import nightFog from "../assets/night/fog.svg";
import dayRain from "../assets/day/rain.svg";
import nightRain from "../assets/night/rain.svg";
import daySnow from "../assets/day/snow.svg";
import nightSnow from "../assets/night/snow.svg";
import dayStorm from "../assets/day/storm.svg";
import nightStorm from "../assets/night/storm.svg";

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  { url: daySunny, day: true, type: "sunny" },
  { url: nightClear, day: false, type: "clear" },
  { url: dayCloudy, day: true, type: "cloudy" },
  { url: nightCloudy, day: false, type: "cloudy" },
  { url: dayFog, day: true, type: "fog" },
  { url: nightFog, day: false, type: "fog" },
  { url: dayRain, day: true, type: "rain" },
  { url: nightRain, day: false, type: "rain" },
  { url: daySnow, day: true, type: "snow" },
  { url: nightSnow, day: false, type: "snow" },
  { url: dayStorm, day: true, type: "storm" },
  { url: nightStorm, day: false, type: "storm" },
];

export const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export const apiKey = "3263eb750864808d2f8e0e2eb38770bb";
export const latitude = 45.0199552;
export const longitude = -93.257728;

export const checkResponse = (res) => {
  if (res.ok) {
    Promise.resolve("Promise Resolved");
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
