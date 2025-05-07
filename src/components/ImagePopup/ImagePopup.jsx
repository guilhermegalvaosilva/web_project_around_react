import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className="popup popup_opened" onClick={onClose}>
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__close-button"
          onClick={onClose}
          aria-label="Fechar"
          type="button"
        >
          &times;
        </button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
