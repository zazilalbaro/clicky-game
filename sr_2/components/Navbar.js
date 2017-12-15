import React from "react";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  navStyle: {
    background: "green"
  }
};

const Navbar = () => (
  <nav className="navbar" style={styles.navStyle}>
    <a href="/">Welcome</a>
  </nav>
);

export default Navbar;
