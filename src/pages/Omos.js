import React from "react";
import "../styles/Omos.css";
import TiktokCTA from "../components/TiktokCTA";

function Omos() {
  return (
    <div className="omos-page">

      <div className="omherosection">
      <img src="pokemonshopstore.png" alt="The physical front of the Pokemonshop store" />
      <h1 className="omh1">Om Pokémon Shop</h1>
      </div>

      <div className="omvision">
        <div className="omvisiontext">
        <h2 className="omh2">Visionen bag Pokémon Shop</h2>
        <p className="omp">
          Bag Pokémonshop står jeg, en 21-årig passioneret samler, der har
          elsket Pokémon-kort siden barndommen. Idéen til Pokémonshop opstod i
          starten af 2019, da jeg ønskede at gøre det nemmere for både samlere
          og forældre at få fat i de rigtige kort. Visionen har altid været at
          skabe Danmarks bedste Pokémon-webshop. 
          <br />
          <br />
          I dag tilbyder vi et omfattende
          sortiment med flere tusinde enkeltkort, booster-pakker fra over 30
          serier, eksklusive bokse og et væld af tilbehør. Uanset om du er en
          erfaren samler eller ny i Pokémon-verdenen, har vi alt, hvad du
          behøver.
          <br />
          <br /> <strong> Åbningstider i butikken: </strong>
          <br />
          Tirsdag kl. 12-17 <br />
          Torsdag kl. 12-17 <br />
          Fredag kl. 12-17 <br />
          Lørdag kl. 10-15
        </p>
        </div>
        <img src="" alt="" />
      </div>

      <TiktokCTA/>
      
    </div>
  );
}

export default Omos;
