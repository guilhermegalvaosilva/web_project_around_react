import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import EditProfilePopup from "./components/EditProfilePopup";
import AddPlacePopup from "./components/AddPlacePopup";
import EditAvatarPopup from "./components/EditAvatarPopup";
import ImagePopup from "./components/ImagePopup";
import PopupConfirmation from "./components/PopupConfirmation";

function App() {
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddPlaceOpen, setAddPlaceOpen] = useState(false);
  const [isEditAvatarOpen, setEditAvatarOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlaceOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfileOpen(false);
    setAddPlaceOpen(false);
    setEditAvatarOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfileOpen} onClose={closeAllPopups} />
        <AddPlacePopup isOpen={isAddPlaceOpen} onClose={closeAllPopups} />
        <EditAvatarPopup isOpen={isEditAvatarOpen} onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupConfirmation isOpen={false} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
