import React from "react";
import "../styles/header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = () => (
  <header className="header">
    <h1>Clicky Game!</h1>
    <h2>Click on an image only once per round to earn points. Don't click on a card twice or you'll lose!</h2>
  </header>
);

export default Header;