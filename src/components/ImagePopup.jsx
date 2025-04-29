import Fechar from "../images/CloseIcon.svg";
function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup ${card ? "popup_opened" : ""}`}>
      <div className="imagepopup__overlay">
        <button className="imagepopup__close-button" onClick={onClose}>
          <img className="imagepopup__close-icon" src={Fechar} alt="Fechar" />
        </button>
        <img className="imagepopup__image" src={card?.link} alt={card?.name} />
        <p className="imagepopup__title">{card?.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
