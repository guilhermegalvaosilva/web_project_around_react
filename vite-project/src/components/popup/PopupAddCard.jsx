// Popups/AddCardPopup.jsx
function AddCardPopup() {
  return (
    <div className="addcard">
      <div className="addcard__overlay">
        <button className="addcard__close-button">
          <img
            className="addcard__close-icon"
            src="/images/CloseIcon.svg"
            alt="duas retas cruzadas na diagonal formando a letra X"
          />
        </button>
        <h3 className="addcard__title">Novo Local</h3>
        <form
          id="card-form"
          className="addcard__form"
          name="addcard-form"
          noValidate
        >
          <div className="addcard__target">
            <input
              id="local"
              required
              maxLength="30"
              minLength="2"
              className="addcard__input popup__input-error"
              type="text"
              placeholder="Título"
            />
            <span className="error__message" id="local-error"></span>
          </div>
          <div className="addcard__target">
            <input
              id="link"
              required
              className="addcard__input popup__input-error"
              type="url"
              placeholder="Link de imagem"
            />
            <span className="error__message" id="link-error"></span>
          </div>
          <button
            className="addcard__button error__button"
            type="submit"
            disabled={true}
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddCardPopup;
// // Popups/EditAvatarPopup.jsx
