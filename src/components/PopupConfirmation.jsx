import Popup from "./Popup/Popup";

function PopupConfirmation({ isOpen, onClose, onConfirm }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h4 className="popupconfirmation__title">Tem certeza?</h4>
      <button className="popupconfirmation__button" onClick={onConfirm}>
        Sim
      </button>
    </Popup>
  );
}

export default PopupConfirmation;
