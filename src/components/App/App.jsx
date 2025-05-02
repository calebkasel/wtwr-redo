import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddItemModal from "../AddItemModal/AddItemModal";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { getWeatherForecast } from "../../utils/weatherApi";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleAddGarment = () => {
    setActiveModal("add-garment");
  }

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  }

  const closeActiveModal = () => {
    setActiveModal("");
  }



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
        <Header onAddButtonClick={handleAddGarment}/>
        <Main weatherData={weatherData} handleCardClick={handleCardClick}/>
        <Footer />
      </div>
      <ModalWithForm title="New Garment" buttonText="Add garment" activeModal={activeModal} onClose={closeActiveModal}>
        <AddItemModal/>
      </ModalWithForm>
      <ItemModal 
        card={selectedCard}
        activeModal={activeModal} 
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
