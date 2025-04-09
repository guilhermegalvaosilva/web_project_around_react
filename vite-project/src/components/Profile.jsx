// Profile.jsx
function Profile() {
  return (
    <div className="content__profile">
      <div className="content__profile-wrapper">
        <img
          className="content__profile-image"
          src="/images/profileimage.jpg"
          alt="Senhor de cabelos brancos sorrindo, ele veste um gorro vermelho e camiseta azul, ao fundo é possível ver o mar levemente desfocado"
        />
        <button className="content__editbtn">
          <img
            className="content__edit-icon"
            src="/images/IconeCanetaEditor.svg"
            alt="ícone de edição"
          />
        </button>
      </div>
      <div className="content__text">
        <div className="content__text-square">
          <h1 className="content__text-name">Jacques Cousteau</h1>
          <button className="content__button">
            <img
              className="content__button-icon"
              src="/images/IconeCanetaVector.svg"
              alt="lápis branco"
            />
          </button>
        </div>
        <p className="content__text-description">Explorador</p>
      </div>
      <button className="content__addbutton">
        <img
          className="content__addbutton-icon"
          src="/images/IconeAddButton.svg"
          alt="sinal de mais"
        />
      </button>
    </div>
  );
}
export default Profile;
// Profile.jsx
