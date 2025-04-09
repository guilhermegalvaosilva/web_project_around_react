// App.jsx
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import EditProfilePopup from "./components/Popups/EditProfilePopup";
import AddCardPopup from "./components/Popups/AddCardPopup";
import ImagePopup from "./components/Popups/ImagePopup";
import ConfirmDeletePopup from "./components/Popups/ConfirmDeletePopup";
import ChangeAvatarPopup from "./components/Popups/ChangeAvatarPopup";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Profile />
        <ul className="cards-list"></ul>
        <Footer />
      </main>

      <EditProfilePopup />
      <AddCardPopup />
      <ImagePopup />
      <ConfirmDeletePopup />
      <ChangeAvatarPopup />
    </>
  );
}

export default App;
// App.jsx
