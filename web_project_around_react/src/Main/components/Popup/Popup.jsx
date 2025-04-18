function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <div className="popup">
      <div className="popup__content">
        <button
          aria-label="Fechar popup"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
// import React from 'react';
export default Popup;
