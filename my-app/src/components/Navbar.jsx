import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyTestNumbre1</h2>
      <ul style={styles.menu}>
        <li>Loook1</li>
        <li>Look2</li>
        <li>Look3</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#1e3a8a",
    color: "#fff",
  },
  logo: { fontWeight: "bold" },
  menu: { listStyle: "none", display: "flex", gap: "15px" },
};

export default Navbar;
