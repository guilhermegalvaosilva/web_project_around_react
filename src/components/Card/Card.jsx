// src/components/Card/Card.jsx
import React from "react";
import deleteIcon from "../Card/Trash.svg"; // Supondo que você tenha um ícone

function Card({ card, onCardClick }) {
  return (
    <div className="card__content">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={() => onCardClick(card)}
      />
      <div className="card__info-title ">
        <h2 className="card__title">{card.name}</h2>
        <button className="card__trash-icon">
          <img src={deleteIcon} alt="Delete icon" />
        </button>
      </div>
    </div>
  );
}

export default Card;
