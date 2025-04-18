export default function ImagePopup({ link, name, onClose }) {
  return (
    <div className="popup popup_opened">
      <div className="popup__content popup__content_content_image">
        <button
          aria-label="Fechar imagem"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <img src={link} alt={name} className="popup__image" />
        <p className="popup__caption">{name}</p>
      </div>
    </div>
  );
}
