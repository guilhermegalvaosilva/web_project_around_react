import React from "react";
import Sinal from "../images/IconeAddButton.svg";
import Lapis from "../images/IconeCanetaVector.svg";
import Edição from "../images/IconeCanetaEditor.svg";
import Perfil from "../images/profileimage.jpg";

function Profile({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <section className="content__profile">
      <div className="content__profile-wrapper" onClick={onEditAvatar}>
        <img
          className="content__profile-image"
          src={Perfil}
          alt="Foto de perfil"
        />
        <button className="content__editbtn">
          <img
            className="content__edit-icon"
            src={Edição}
            alt="ícone de edição"
          />
        </button>
      </div>
      <div className="content__text">
        <div className="content__text-square">
          <h1 className="content__text-name">Jacques Cousteau</h1>
          <button className="content__button" onClick={onEditProfile}>
            <img
              className="content__button-icon"
              src={Lapis}
              alt="ícone de lápis branco"
            />
          </button>
        </div>
        <p className="content__text-description">Explorador</p>
      </div>
      <button className="content__addbutton" onClick={onAddPlace}>
        <img
          className="content__addbutton-icon"
          src={Sinal}
          alt="sinal de mais"
        />
      </button>
    </section>
  );
}

export default Profile;
