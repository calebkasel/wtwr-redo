import "./Header.css";
import logo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/avatar.svg";
import { currentDate } from "../../utils/constants";

function Header({ onAddButtonClick, location }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <p className="header__date-and-location">{currentDate}, {location}</p>
      <button
        className="header__add-clothes-btn"
        type="button"
        onClick={onAddButtonClick}
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <h1 className="header__username">Terrance Tegegne</h1>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
