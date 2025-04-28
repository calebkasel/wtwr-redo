import "./ModalWithForm.css";
import greyClose from "../../assets/grey-close-button.svg";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__container">
        <h2 className="modal__header">New Garment</h2>
        <button type="button" className="modal__close-btn" />
        <form className="modal__form">
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image
            <input
              type="text"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <div className="modal__radio-container">
              <input type="radio" className="modal__radio-input" />
              <label htmlFor="hot" className="modal__label-radio">
                Hot
              </label>
            </div>
            <div className="modal__radio-container">
              <input type="radio" className="modal__radio-input" />
              <label htmlFor="warm" className="modal__label-radio">
                Warm
              </label>
            </div>
            <div className="modal__radio-container">
              <input type="radio" className="modal__radio-input" />
              <label htmlFor="cold" className="modal__label-radio">
                Cold
              </label>
            </div>
          </fieldset>
          <button type="submit" className="modal__submit-btn" disabled>
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
