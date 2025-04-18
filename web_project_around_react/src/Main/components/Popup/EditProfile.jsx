function EditProfile() {
  return (
    <form className="popup__form" name="edit-profile-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input"
          type="text"
          name="name"
          placeholder="Nome"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__error" id="name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input"
          type="text"
          name="about"
          placeholder="Sobre mim"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error" id="about-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}

export default EditProfile;
// import React from 'react';
