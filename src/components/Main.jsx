import React from "react";
import Profile from "./Profile";
import CardList from "./CardList";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  return (
    <main className="content">
      <Profile
        onEditProfile={onEditProfile}
        onAddPlace={onAddPlace}
        onEditAvatar={onEditAvatar}
      />
      <CardList onCardClick={onCardClick} />
    </main>
  );
}

export default Main;
