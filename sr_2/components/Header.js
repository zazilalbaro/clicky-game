import React from "react";


const styles = {
  headerPanel: {
    background: "dark grey",
    textAlign: "center"
  },
  headerStyle: {
    color: "white"
  }
};

const Header = () => (
  <header style={styles.headerPanel} className="header">
    <h1 style={styles.headerStyle}>Clicky Game!</h1>
    <h3 style={styles.headerStyle}>Click each image only once to win!</h3>
  </header>
);

export default Header;
