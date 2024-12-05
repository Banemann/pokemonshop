import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import "../styles/Home.css";
import CardWheel from "../components/CardWheel";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase.from("pokemonshop").select("*");

        if (error) {
          throw error;
        }
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
          <img src="nyhed1.png" alt="nyhed1" />
          <img src="nyhed2.png" alt="nyhed2" />
        </div>
      </div>

      <div className="homeanbefalet">
        <div className="anbefalettext">
          <h2>Pokémon Shops mest anbefalede køb</h2>
          <p>
            Find et bredt udvalg af <strong> populære Pokémon produkter</strong> hos Pokemon Shop, så du kan udvikle din samling.
          </p>
        </div>

        <div className="cardwheel">
          <CardWheel products={products} />
        </div>
      </div>

      <div className="spotproductdiv">
        <div className="spotproduct">

          

        </div>    
        </div>

    </div>
  );
};

export default Home;