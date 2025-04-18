export default function EditAvatar() {
  return (
    <form className="popup__form" name="edit-avatar-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input"
          type="url"
          name="avatar"
          placeholder="Link do avatar"
          required
        />
        <span className="popup__error" id="avatar-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
