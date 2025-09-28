import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 - Test reactJs 17:46 </p>
      <p>18/09/2025</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "30px",
    padding: "15px",
    textAlign: "center",
    background: "#1e3a8a",
    color: "#fff",
  },
};

export default Footer;
