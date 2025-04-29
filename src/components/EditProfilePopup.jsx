import Popup from "./Popup";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h3 className="popup__title">Editar Perfil</h3>
      <form className="popup__form" name="popup-form" noValidate>
        {/* Inputs e botão */}
      </form>
    </Popup>
  );
}

export default EditProfilePopup;
