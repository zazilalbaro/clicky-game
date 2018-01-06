import React from "react";
import "../styles/footer.css";

// By importing the Footer.css file, it is added to the DOM whenever this component loads

const Footer = () => (
  <footer className="App-footer">
    <h1 className="App-title">Clicky Game</h1>
    <p className="muted credit">Copyright &copy; 2017 Zazil Toma</p>
  </footer>
);

export default Footer;