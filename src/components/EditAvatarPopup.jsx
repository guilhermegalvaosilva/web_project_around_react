import Popup from "./Popup/Popup";

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h5 className="popupprofilepicture__title">Alterar a foto do perfil</h5>
      <form
        className="popupprofilepicture__form"
        name="popupprofilepicture-form"
        noValidate
      >
        {/* Input e botão */}
      </form>
    </Popup>
  );
}

export default EditAvatarPopup;
