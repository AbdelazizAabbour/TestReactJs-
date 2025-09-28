import React from "react";
import Card from "../components/Card";

function Home() {
  const produits = [
    { title: "Aziz aabbour", description: "dev mobile ", image: "1.png" },
    { title: "Aziz aabbour", description: "dev full stack ", image: "1.png" },
    { title: "Aziz aabbour", description: "dev mobile ", image: "1.png" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenue  Test numbre 1</h1>
      <p style={{ marginBottom: "40px", maxWidth: "1000px", margin: "0 auto" }}>
        I am a dedicated Full-Stack Developer with strong expertise in both front-end and back-end technologies. 
        On the web side, I specialize in building modern, scalable, and high-performance applications using React.js, Laravel,
         Tailwind CSS, and Bootstrap — delivering solutions that are both visually appealing and highly functional.
      </p> <br /> <br /><br />

       <p style={{ marginBottom: "40px", maxWidth: "1000px", margin: "0 auto" }}>
       Beyond web development, I am also exploring and applying mobile development technologies such as React Native, 
       Flutter, and Dart, allowing me to create cross-platform applications that offer smooth, native-like experiences.
      </p> <br /> <br /><br />
      <div style={styles.grid}>
        {produits.map((p, index) => (
          <Card
            key={index}
            title={p.title}
            description={p.description}
            image={p.image}
            style={{
              ...styles.card,
              animation: `fadeIn 0.8s ease forwards`,
              animationDelay: `${index * 0.3}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
          from { opacity: 0; transform: translateY(20px); }
        }

        .card-hover:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: { padding: "20px", textAlign: "center" },
  title: { marginBottom: "30px", fontSize: "2rem" },
  grid: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" },
  card: {
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
};

export default Home;
