// Main.jsx
import { useState } from "react";
import Card from "./components/Card/Card";
import Popup from "./components/Popup/Popup";
import ImagePopup from "./components/Popup/ImagePopup";
import NewCard from "./components/Popup/NewCard";
import EditProfile from "./components/Popup/EditProfile";
import EditAvatar from "./components/Popup/EditAvatar";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };

  const cards = [
    {
      isLiked: false,
      _id: "1",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    },
    {
      isLiked: false,
      _id: "2",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    },
  ];

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div
          className="profile__image"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        ></div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <p className="profile__description">Explorer</p>
          <button
            aria-label="Edit profile"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onClick={handleCardClick} />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      {selectedCard && (
        <ImagePopup
          link={selectedCard.link}
          name={selectedCard.name}
          onClose={handleClosePopup}
        />
      )}
    </main>
  );
}
