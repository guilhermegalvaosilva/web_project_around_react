export default function RemoveCard() {
  return (
    <form className="popup__form" name="remove-card-form" noValidate>
      <p className="popup__confirmation-text">
        Tem certeza que deseja excluir este cartão?
      </p>
      <button className="button popup__button" type="submit">
        Sim
      </button>
    </form>
  );
}
