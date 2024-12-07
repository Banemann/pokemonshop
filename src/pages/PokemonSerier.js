import React from "react";
import "../styles/PokemonSerier.css";
import { Link } from "react-router-dom";

function PokemonSerier() {
  return (
    <div className="pokemonserier">
              <h1>Pokemon TCG serier</h1>
              <div className="ddserier">
                <Link to="/shop/prismatic">
                  <img src="/prismatic-serie.svg" alt="Prismatic Evolutions" />
                </Link>
                <Link to="/shop/surging">
                  <img src="/surging-serie.svg" alt="Surging Sparks" />
                </Link>
                <Link to="/shop/stellar">
                  <img src="/stellar-serie.svg" alt="Stellar Crown" />
                </Link>
              </div>
            </div>
  );
}

export default PokemonSerier;




