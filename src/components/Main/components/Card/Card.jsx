function Card(props) {
  const { name, link, isLiked } = props.card;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={props.onClick}
      />
      <button
        aria-label="Deletar card"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Curtir card"
          type="button"
          className={`card__like-button ${
            isLiked ? "card__like-button_active" : ""
          }`}
        />
      </div>
    </li>
  );
}
export default Card;
