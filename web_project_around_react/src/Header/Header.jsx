import React from "react";
import Logo from "../images/Vector.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <img src={Logo} alt="Logo Around The U.S." className="header__logo" />
      </div>
      <hr className="header__line" />
    </header>
  );
}

export default Header;
// import React from 'react';
