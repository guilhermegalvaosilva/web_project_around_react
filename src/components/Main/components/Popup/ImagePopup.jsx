// ImagePopup.jsx
export default function ImagePopup({ card }) {
  return (
    <figure className="popup__figure">
      <img className="popup__image" src={card.link} alt={card.name} />
      <figcaption className="popup__caption">{card.name}</figcaption>
    </figure>
  );
}
