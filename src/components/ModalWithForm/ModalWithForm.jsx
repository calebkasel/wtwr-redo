import "./ModalWithForm.css";
import greyClose from "../../assets/grey-close-button.svg";

function ModalWithForm({children, title, buttonText, activeModal, onClose}) {
  return (
    <div className={`modal ${activeModal === "add-garment" && "modal__opened"}`}>
      <div className="modal__container">
        <h2 className="modal__header">{title}</h2>
        <button type="button" className="modal__close-btn" onClick={onClose}/>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit-btn" disabled>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
