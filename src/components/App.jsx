import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Popup from "./Popup/Popup";
import EditAvatar from "./EditAvatar/EditAvatar";
import EditProfile from "./EditProfile/EditProfile";

function App() {
  const [user, setUser] = useState({
    name: "Guilherme",
    about: "Web Developer",
  });
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);

  const [cards, setCards] = useState([
    {
      _id: "1",
      name: "Vale de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    },
    {
      _id: "2",
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    },
    {
      _id: "3",
      name: "Montanhas Carecas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    },
    {
      _id: "4",
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    },
    {
      _id: "5",
      name: "Parque Nacional da Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    },
    {
      _id: "6",
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    },
  ]);

  function handleOpenAddCard() {
    setIsAddCardOpen(true);
  }

  function handleCloseAddCard() {
    setIsAddCardOpen(false);
  }

  function handleDeleteCard(card) {
    const filteredCards = cards.filter((c) => c._id !== card._id);
    setCards(filteredCards);
  }

  function handleEditUserPopup() {
    setIsEditProfileOpen((prev) => !prev);
  }

  function handleUpdateUserInfo(updatedUser) {
    setUser(updatedUser);
  }

  function handleOpenEditAvatar() {
    console.log("Abriu o popup de avatar");
    setIsEditAvatarOpen(true);
  }

  function handleCloseEditAvatar() {
    setIsEditAvatarOpen(false);
  }

  return (
    <div className="page__content">
      <Header />

      <Main
        cards={cards}
        user={user}
        handleEditUserPopup={handleEditUserPopup}
        handleDeleteCard={handleDeleteCard}
        handleOpenAddCard={handleOpenAddCard}
        handleCloseAddCard={handleCloseAddCard}
        isAddCardOpen={isAddCardOpen}
        handleOpenEditAvatar={handleOpenEditAvatar}
      />

      <EditProfile
        isOpen={isEditProfileOpen}
        onClose={handleEditUserPopup}
        onUpdateUser={handleUpdateUserInfo}
      />
      <EditAvatar isOpen={isEditAvatarOpen} onClose={handleCloseEditAvatar} />
      <Footer />
    </div>
  );
}

export default App;
