// Popups/ChangeAvatarPopup.jsx
function ChangeAvatarPopup() {
  return (
    <div className="popupprofilepicture">
      <div className="popupprofilepicture__overlay">
        <button className="popupprofilepicture__close-button">
          <img
            className="popupprofilepicture__icon"
            src="/images/CloseIcon.svg"
            alt="duas retas cruzadas na diagonal formando a letra X"
          />
        </button>
        <div className="popupprofilepicture__content">
          <h5 className="popupprofilepicture__title">
            Alterar a foto do perfil
          </h5>
          <form
            id="popupprofilepicture-form"
            className="popupprofilepicture__form"
            name="popupprofilepicture-form"
            noValidate
          >
            <div className="popupprofilepicture__target">
              <input
                id="linkprofile-picture"
                required
                className="popupprofilepicture__input popupprofilepicture__input-error"
                type="url"
                placeholder="Insira um link de imagem aqui"
              />
              <span
                className="error__message"
                id="linkprofile-picture-error"
              ></span>
            </div>
            <button
              className="popupprofilepicture__button error__button"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ChangeAvatarPopup;
// // Popups/ChangeAvatarPopup.jsx
