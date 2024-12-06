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

          <div className="spotproductimage">
            <img src="spotproduct.png" alt="spotproduct" />
          </div>

          <div className="spotproducttext">
            <h2>Pokémon TCG: Terapagos ex Ultra-Premium Collection</h2>
            <p>Forudbestil: 22/11/24</p>
            <p>
              Med sin glitrende skal af Terastal-energi stråler den legendariske Pokémon Terapagos i sin kraftfulde Stellar Form! Nu kan du tilføje denne mystiske kraft til dine Pokémon TCG-dæk med et foil-promokort med Terapagos ex. 
            </p>
            <p>400 kr.</p>
            <button>Tilføj til kurv</button>
          </div>

        </div>    
        </div>

      <div className="homectadiv">

        <div className="homecta">
          <img src="maskot.svg" alt="cta1" />
          <div className="homectatext">
          <h2>Hold dig opdateret med Pokémon Shop</h2>
          <p>
  Følg med i pack openings, ugens bedste pull og meget 
  mere direkte på TikTok! blev en del af et samle glad 
  fællesskab af Pokémon entusiaster!
  Eller besøg Pokemon Shops fysiske butik på adressen: <span/>
  <a 
    href="https://www.google.com/maps/search/?api=1&query=Jernbane+Allé+77,+st.+tv,+2720+Vanløse" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ textDecoration: 'underline', color: 'inherit' }}
  >
    <strong>Jernbane Allé 77, st. tv, 2720 Vanløse</strong>
  </a>
</p>
<a 
  className="tiktokbtn" 
  href="https://www.tiktok.com/@pokemonshopdk" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Besøg TikTok
  <img src="tiktoklogo.svg" alt="TikTok Logo" />
</a>

          </div>
          </div>


        </div>

    </div>
  );
};

export default Home;