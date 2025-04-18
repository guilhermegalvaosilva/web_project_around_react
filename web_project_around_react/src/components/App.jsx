import React from "react";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import EditProfile from "../Main/components/Popup/EditProfile";
import NewCard from "../Main/components/Popup/NewCard";
import Popup from "../Main/components/Popup/Popup";
import EditAvatar from "./components/Popup/EditAvatar.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Footer />
        <EditProfile />
        <NewCard />
        <Popup />
        <EditAvatar />
        {/* <ImagePopup /> */}
        {/* <Card /> */}
        {/* <Popup /> */}
        {/* <NewCard /> */}
        {/* <EditProfile /> */}
        {/* <EditAvatar /> */}
      </div>
    </>
  );
}

export default App;
// import React from "react";
// import Main from "../Main/Main";
