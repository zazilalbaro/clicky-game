import React from "react";
import "../styles/navbar.css";
let brand = <a href='/'>Clicky Game</a>;

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = props => (
  <nav className="navbar">
    <ul>
    <li>{brand}</li>
    <li>Click on an image to begin</li>
    <li>Score: {props.score} | Top Score: {props.bestScore}</li>
  </ul>
  </nav>
);

export default Navbar;