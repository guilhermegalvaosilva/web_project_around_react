// Popups/EditProfilePopup.jsx
function EditProfilePopup() {
  return (
    <div className="popup">
      <div className="popup__overlay">
        <button className="popup__close-button">
          <img
            className="popup__icon"
            src="/images/CloseIcon.svg"
            alt="duas retas cruzadas na diagonal formando a letra X"
          />
        </button>
        <h3 className="popup__title">Editar Perfil</h3>
        <form
          id="user-form"
          className="popup__form"
          name="popup-form"
          noValidate
        >
          <div className="popup__target">
            <input
              id="name"
              required
              maxLength="40"
              minLength="2"
              className="popup__input popup__input-error"
              type="text"
              placeholder="Nome"
            />
            <span className="error__message" id="name-error"></span>
          </div>
          <div className="popup__target">
            <input
              id="about"
              required
              maxLength="200"
              minLength="2"
              className="popup__input popup__input-error"
              type="text"
              placeholder="Sobre mim"
            />
            <span className="error__message" id="about-error"></span>
          </div>
          <button
            className="popup__save-button error__button"
            type="submit"
            disabled={true}
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditProfilePopup;
// Popups/EditAvatarPopup.jsx
