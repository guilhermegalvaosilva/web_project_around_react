function ConfirmDeletePopup() {
  return (
    <div className="popupconfirmation">
      <div className="popupconfirmation__overlay">
        <button className="popupconfirmation__close-button">
          <img
            className="popupconfirmation__icon"
            src="/images/CloseIcon.svg"
            alt="duas retas cruzadas na diagonal formando a letra X"
          />
        </button>
        <div className="popupconfirmation__content">
          <h4 className="popupconfirmation__title">Tem certeza?</h4>
          <button className="popupconfirmation__button" type="submit">
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
export default ConfirmDeletePopup;
