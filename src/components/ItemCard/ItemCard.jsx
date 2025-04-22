import "./ItemCard.css";

function ItemCard({ key, item }) {
  return (
    <div className="card__container">
      <p className="card__name">{item.name}</p>
      <img src={item.link} alt={item.name} className="card__image" />
    </div>
  );
}
export default ItemCard;