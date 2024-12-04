import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="homediv">

      <div className="homenyheder">
        <h1>Populære Nyheder</h1>
        <p>
          En elektrisk bølge er på vej med{" "}
          <strong>Scarlet and Violet Surging Sparks</strong>, oplev også den nye{" "}
          <strong>Pokémon julekalender</strong>.
        </p>
        <div className="nyhederimagediv">
          <img src="nyhed1.png" alt="nyhed1" />
          <img src="nyhed2.png" alt="nyhed2" />
        </div>
      </div>

    </div>
  );
};

export default Home;
