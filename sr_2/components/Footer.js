import React from "react";

const styles = {
  footerPanel: {
    background: "grey",
    padding: 30,
    verticalAlign: 10
  },
  footerStyle: {
    fontSize: 10
  }
};

const Footer = () => (
  <footer style={styles.footerPanel} className="footer">
    <p style={styles.footerStyle}>Zazil Toma 2017</p>
  </footer>
);

export default Footer;