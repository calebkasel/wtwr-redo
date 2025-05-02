import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddItemModal from "../AddItemModal/AddItemModal";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import {
  getWeatherForecast,
  parseWeatherForecast,
} from "../../utils/weatherApi";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleAddGarment = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeatherForecast()
      .then((data) => {
        // console.log(data);
        const filteredData = parseWeatherForecast(data);
        console.log(filteredData);
        setWeatherData(filteredData);
        setLocation(filteredData.city);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header onAddButtonClick={handleAddGarment} location={location} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        title="New Garment"
        buttonText="Add garment"
        activeModal={activeModal}
        onClose={closeActiveModal}
      >
        <AddItemModal />
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
