import { useState } from "react";
import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/Popup/NewCard.jsx";
import EditProfile from "./components/Popup/EditProfile.jsx";

import Card from "./components/Card.jsx";
import ImagePopup from "./components/Popup/ImagePopup.jsx";
import EditAvatar from "./components/Popup/EditAvatar.jsx";
import RemoveCard from "./components/Popup/RemoveCard.jsx";

const removeCardPopup = { title: "Remover cartão", children: <RemoveCard /> };
const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };

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

function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = { title: "Novo cartão", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      {/* Seu conteúdo principal aqui */}

      <section className="profile">
        <button
          aria-label="Editar perfil"
          className="profile__edit-button"
          type="button"
          onClick={() => handleOpenPopup(editProfilePopup)}
        />
        <button
          aria-label="Editar avatar"
          className="profile__avatar-button"
          type="button"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        />
        <button
          aria-label="Adicionar novo cartão"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>

      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onClick={() =>
              setSelectedCard({ link: card.link, name: card.name })
            }
          />
        ))}
      </ul>

      {/* Renderização condicional do popup */}
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      {selectedCard && (
        <ImagePopup
          link={selectedCard.link}
          name={selectedCard.name}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </main>
  );
}
export default Main;
