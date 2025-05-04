import { useState } from "react";
import trashIcon from "../../images/Trash.svg";
import infoIcon from "../../images/Vectorheart.svg"; // ícone branco (não curtido)
import likedIcon from "../../images/BlackHeart.svg"; // ícone preto (curtido)

function Card({ card, handleDeleteCard }) {
  const [liked, setLiked] = useState(false); // começa como não curtido

  function deleteCard() {
    handleDeleteCard(card);
  }

  function handleLike() {
    setLiked(!liked); // alterna entre true e false a cada clique
  }

  return (
    <li className="card__content">
      <img className="card__image" src={card.link} alt={card.name} />
      <img
        className="card__trash-icon"
        src={trashIcon}
        alt="ícone de lixeira"
        onClick={deleteCard}
      />
      <div className="card__info">
        <p className="card__info-title">{card.name}</p>
        <img
          className="card__info-icon"
          src={liked ? likedIcon : infoIcon} // troca imagem conforme o estado
          alt={
            liked ? "coração preto (curtido)" : "coração branco (não curtido)"
          }
          onClick={handleLike}
          style={{ cursor: "pointer", transition: "transform 0.2s" }}
        />
      </div>
    </li>
  );
}

export default Card;
