import React from "react";

function Card({ title, description, image }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.img} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button style={styles.btn}>Voir plus</button>
    </div>
  );
}



const styles = {
  card: {
    width: "250px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
  img: { width: "100%", borderRadius: "10px" },
  btn: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    background: "#1e3a8a",
    color: "#fff",
    cursor: "pointer",
  },
};



export default Card;
