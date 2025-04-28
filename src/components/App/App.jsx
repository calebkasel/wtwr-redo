import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { getWeatherForecast } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });
  // const [weatherLocation, setWeatherLocation] = useState({});

  // const weatherDatas = {};

  // const weatherDatas = getWeatherForecast()
  //   .then((data) => {
  //     return data.current;
  //   });
  // console.log(weatherDatas);

  // useEffect(() => {
  //   getWeatherForecast()
  //     .then((data) => {
  //       // const temperature = parseWeatherData(data);
  //       const location = parseLocationData(data);
  //       setWeatherLocation(location);
  //     })
  //     .catch(console.error);
  // }, []);

  // console.log(weatherLocation);

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
      <ModalWithForm />
    </div>
  );
}

export default App;
