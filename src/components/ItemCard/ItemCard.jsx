import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <li className="card__container">
      <h2 className="card__text">{item.name}</h2>
      <img src={item.link} alt={item.name} className="card__image" />
    </li>
  );
}
export default ItemCard;
