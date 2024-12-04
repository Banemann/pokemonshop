import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="homediv">

      <div className="homenyheder">
        <div className="nyhedertext">
        <h1>Populære Nyheder</h1>
        <p>
          En elektrisk bølge er på vej med
          <strong> Scarlet and Violet Surging Sparks</strong>, oplev også den nye
          <strong> Pokémon julekalender</strong>.
        </p>
        </div>
        <div className="nyhederimagediv">
          <img src="nyhed1.png" alt="nyhed1"/>
          <img src="nyhed2.png" alt="nyhed2"/>
        </div>
      </div>

      <div className="homeanbefalet">

        <div className="anbefalettext">
        <h2>Pokémon Shops mest anbefalede køb</h2>
        <p>Find et bredt udvalg af <strong> populære Pokémon produkter</strong> hos Pokemon Shop, så du kan udvikle din samling.</p> 
        </div>

      </div>

    </div>
  );
};

export default Home;
