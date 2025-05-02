import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";

function ItemModal({ card, onClose, activeModal }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__container_type_item">
        <img src={card.link} alt={card.name} className="modal__image" />
        <button
          type="button"
          className="modal__close-btn_type_item"
          onClick={onClose}
        />
        <div className="modal__info">
          <p className="modal__item-name">{card.name}</p>
          <p className="modal__weather-type">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
