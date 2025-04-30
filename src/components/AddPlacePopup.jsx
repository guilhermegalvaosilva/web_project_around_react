import Popup from "./Popup/Popup";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h3 className="popup__title">Novo Local</h3>
      <form className="addcard__form" name="addcard-form" noValidate>
        {/* Inputs e botão */}
      </form>
    </Popup>
  );
}

export default AddPlacePopup;
